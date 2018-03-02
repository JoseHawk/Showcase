#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

cf start educama-backend
cf start educama-frontend
cf start educama-flight-service
cf start educama-api-gateway
cf start educama-supplier-simulator-frontend
cf start educama-supplier-simulator-backend
