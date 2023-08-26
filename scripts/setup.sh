#!/bin/bash

if [ -f .env ]; then
	rm .env
fi

echo "DB_USER=testuser" >>.env
echo "DB_HOST=127.0.0.1" >>.env
echo "DB_NAME=testdb" >>.env
echo "DB_PASSWORD=qwerty" >>.env
echo "DB_PORT=5432" >>.env
