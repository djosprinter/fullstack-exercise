#!/bin/bash
set -e
set -x

echo "RUNNING MIGRATIONS";
npx sequelize-cli db:migrate

echo "START SERVER";
npm run start