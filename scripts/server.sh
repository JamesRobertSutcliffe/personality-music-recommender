#!/bin/bash

IMAGE_NAME="local-postgres"
IMAGE_TAG="13"
CONTAINER_NAME="postgres-container"
DB_USER="testuser"
DB_NAME="testdb"
SCHEMA_FILE="./src/db/schema.sql"
TIMEOUT=10

if docker image inspect $IMAGE_NAME:$IMAGE_TAG >/dev/null 2>&1; then
	echo "Image already exists. Skipping build."
else
	echo "Image does not exist. Building..."
	docker build -t $IMAGE_NAME:$IMAGE_TAG .
fi

if docker ps -a --format "{{.Names}}" | grep -q "$CONTAINER_NAME"; then
	echo "Stopping and removing existing $CONTAINER_NAME..."
	docker stop $CONTAINER_NAME
	docker rm $CONTAINER_NAME
fi

docker volume create pgdata

docker run -d --name $CONTAINER_NAME -p 5432:5432 -v pgdata:/var/lib/postgresql/data $IMAGE_NAME:$IMAGE_TAG

echo "PostgreSQL server running successfully"

elapsed_time=0
while ! docker exec -i $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME -c "SELECT 1;" >/dev/null 2>&1; do
	echo "Waiting for PostgreSQL server to become available..."
	sleep 1
	elapsed_time=$((elapsed_time + 1))
	if [ $elapsed_time -gt $TIMEOUT ]; then
		echo "Timeout reached. Unable to connect to PostgreSQL server. Exiting..."
		exit 1
	fi

done

echo "Importing schema..."
docker exec -i $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME <$SCHEMA_FILE

echo "Schema imported successfully."

npm run dev
