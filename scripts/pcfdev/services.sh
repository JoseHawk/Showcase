#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# MySQL database for educama backend
cf create-service p-mysql 512mb educama-mysql-db

# Mongo database for flight information service (user-provided service)
cf cups flight-service-database -p ../../services/flightinformation/educama-flight-information-database-service.json

# Mongo database for supplier simulator (user-provided service)
cf cups supplier-simulator-database -p ../../services/educama-supplier-simulator-backend/educama-supplier-simulator-database-service.json

# RabbitMQ (used my multiple apps)
cf create-service p-rabbitmq standard supplier-simulator-queue
