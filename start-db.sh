#!/bin/bash

# Create volume to persist data
docker volume create --name=mongodatadev

#Run container with volume mounted
docker run --name mongodb-dev -v mongodatadev:/data/db -d -p 27017:2707 --network="host" mongo