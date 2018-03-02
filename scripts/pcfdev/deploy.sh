#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

cf push -f ../../manifests/pcfdev.yml
