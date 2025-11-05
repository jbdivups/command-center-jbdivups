#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/lib.sh"

docker run -v "${PWD}:/usr/src" -w /usr/src $(docker build -q ./bin/)