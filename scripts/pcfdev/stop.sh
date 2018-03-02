#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

cf stop educama-backend
cf stop educama-frontend
cf stop educama-flight-service
cf stop educama-api-gateway
cf stop educama-supplier-simulator-frontend
cf stop educama-supplier-simulator-backend
