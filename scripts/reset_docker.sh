#!/bin/bash

IMAGE_NAME="local-postgres"
IMAGE_TAG="13"
CONTAINER_NAME="postgres-container"
VOLUME_NAME="pgdata"

if docker ps --format "{{.Names}}" | grep -q $CONTAINER_NAME; then
	echo "Stopping existing $CONTAINER_NAME..."
	docker stop $CONTAINER_NAME
fi

if docker ps -a --format "{{.Names}}" | grep -q $CONTAINER_NAME; then
	echo "Removing existing $CONTAINER_NAME..."
	docker rm $CONTAINER_NAME
fi

if docker volume ls --format "{{.Name}}" | grep -q $VOLUME_NAME; then
	echo "Removing existing volume $VOLUME_NAME..."
	docker volume rm $VOLUME_NAME
fi

if docker image inspect $IMAGE_NAME:$IMAGE_TAG >/dev/null 2>&1; then
	echo "Removing existing image $IMAGE_NAME:$IMAGE_TAG..."
	docker rmi $IMAGE_NAME:$IMAGE_TAG
fi

echo "Reset complete."
