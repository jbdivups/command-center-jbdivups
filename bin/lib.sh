set -e
set -o pipefail

aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws

function aws_assume_environment() {
  if [[ "$ENVIRONMENT" = "development" ]]
  then
    aws_assume_dev
  elif [[ "$ENVIRONMENT" = "testing" ]]
  then
    aws_assume_test
  elif [[ "$ENVIRONMENT" = "perf" ]]
  then
    aws_assume_perf
  elif [[ "$ENVIRONMENT" = "production" ]]
  then
    aws_assume_prod
  elif [[ "$ENVIRONMENT" = "prod-aptia" ]]
  then
    aws_assume_prod_aptia
  else
    echo "Invalid environment! $ENVIRONMENT"
    exit 1
  fi
}

function aws_assume_dev() {
  aws_assume_role "arn:aws:iam::250642807918:role/cahrus-shared-services-cicd"
}

function aws_assume_test() {
  aws_assume_role "arn:aws:iam::753876165110:role/cahrus-shared-services-cicd"
}

function aws_assume_perf() {
  aws_assume_role "arn:aws:iam::815459455001:role/cahrus-shared-services-cicd"
}

function aws_assume_prod() {
  aws_assume_role "arn:aws:iam::411097365245:role/cahrus-shared-services-cicd"
}

function aws_assume_prod_aptia() {
  aws_assume_role "arn:aws:iam::455118623116:role/cahrus-shared-services-cicd"
}

function aws_assume_role() {
  local ROLE_ARN=$1
  local CREDENTIALS
  CREDENTIALS=$(aws sts assume-role --role-arn "${ROLE_ARN}" --role-session-name cicd-build --duration-seconds 3600)

  AWS_ACCESS_KEY_ID=$(echo "$CREDENTIALS" | jq -r '.Credentials.AccessKeyId')
  AWS_SECRET_ACCESS_KEY=$(echo "$CREDENTIALS" | jq -r '.Credentials.SecretAccessKey')
  AWS_SESSION_TOKEN=$(echo "$CREDENTIALS" | jq -r '.Credentials.SessionToken')

  export AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN
  echo "Assumed ${ROLE_ARN}"
}

function aws_leave_role() {
  unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN
}

function docker_maven() {
  docker run -t \
    --rm \
    --name=providencehr \
    --network="host" \
    -v "$PWD":/usr/src/app \
    -v ~/.m2:/root/.m2 \
    -v ~/.npm:/root/.npm \
    -e AWS_ACCESS_KEY_ID \
    -e AWS_SECRET_ACCESS_KEY \
    -e AWS_SESSION_TOKEN \
    -e AWS_REGION \
    -w /usr/src/app \
    maven:3-openjdk-16
}

function docker_run() {
  local IMAGE=$1
  local ARGS=$2
  local WORKING_DIRECTORY=${3:-$PWD}

  echo "Running Docker \"$IMAGE $ARGS\" in $WORKING_DIRECTORY"

  # shellcheck disable=SC2086
  docker run -t \
    --rm \
    --env-file <(env | grep -E 'AWS|TF_VAR') \
    -v "${WORKING_DIRECTORY}":/usr/src/app \
    -w /usr/src/app \
    "public.ecr.aws/${IMAGE}" \
    ${ARGS}
}

function build_and_publish_image_to_ecr() {
  local IMAGE_NAME=$1

  local GIT_HASH
  GIT_HASH=$(git log -1 --pretty=%h)

  docker build -t "${IMAGE_NAME}":"${GIT_HASH}" .

  local ACCOUNT_ID
  ACCOUNT_ID=$(aws sts get-caller-identity | jq -r '.Account')

  REGION="us-east-1"
  ECR_REPOSITORY="${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com:443/${IMAGE_NAME}:${GIT_HASH}"

  aws ecr get-login-password --region "${REGION}" | docker login --username AWS --password-stdin "${ECR_REPOSITORY}"
  docker tag "${IMAGE_NAME}":"${GIT_HASH}" "${ECR_REPOSITORY}"
  docker push "${ECR_REPOSITORY}"
}

function deploy_terraform() {
  local SRC_DIR=$1

  docker_run hashicorp/terraform:latest init "${SRC_DIR}"
  docker_run hashicorp/terraform:latest "workspace new ${ENVIRONMENT}" "${SRC_DIR}" || true
  docker_run hashicorp/terraform:latest "workspace select ${ENVIRONMENT}" "${SRC_DIR}"
  docker_run hashicorp/terraform:latest "apply -auto-approve" "${SRC_DIR}"
}

function deploy_javascript() {
  local SRC_DIR=$1
  local BUCKET_PATH=$2
  local INDEX=$3

  aws_assume_environment

  BUCKET="3x-static-resources-us-east-1-${ENVIRONMENT}-cahrus"

  aws s3 sync "$SRC_DIR" "s3://${BUCKET}${BUCKET_PATH}"

  local DISTRIBUTION
  DISTRIBUTION=$(aws cloudfront list-distributions | jq -r '.DistributionList.Items[] | select(.Origins.Items[] | .Id == "api_east_origin") | .Id')

  aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION}" --paths "$INDEX"

}