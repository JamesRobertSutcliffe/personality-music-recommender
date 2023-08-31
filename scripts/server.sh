#!/bin/bash

IMAGE_NAME="local-postgres"
IMAGE_TAG="13"

if docker image inspect $IMAGE_NAME:$IMAGE_TAG >/dev/null 2>&1; then
	echo "Image already exists. Skipping build."
else
	echo "Image does not exist. Building..."
	docker build -t $IMAGE_NAME:$IMAGE_TAG .
fi

if docker ps -a --format "{{.Names}}" | grep -q "postgres-container"; then
	echo "Stopping and removing existing postgres-container..."
	docker stop postgres-container
	docker rm postgres-container
fi

docker volume create pgdata

docker run -d --name postgres-container -p 5432:5432 -v pgdata:/var/lib/postgresql/data $IMAGE_NAME:$IMAGE_TAG

echo "PostgreSQL server running successfully"

npm run dev
