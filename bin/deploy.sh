#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/lib.sh"


deploy_javascript "$PWD/dist" "/command-center" "/command-center/index.html"