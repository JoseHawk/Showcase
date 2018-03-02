#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

cf login -a api.local.pcfdev.io -u admin -p admin -o pcfdev-org --skip-ssl-validation
