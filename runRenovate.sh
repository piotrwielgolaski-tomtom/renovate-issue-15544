#!/usr/bin/env bash
## script to easier run renovate locally for testing
export TOKEN=$1
PWD=`pwd`
docker run --rm --env LOG_LEVEL=debug --env RENOVATE_TOKEN=$TOKEN  -v "$PWD/config.js:/usr/src/app/config.js" renovate/renovate:latest
