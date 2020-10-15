#!/bin/bash
echo "Client is now available on localhost"
docker run -p 80:80 --rm --name docker-so-client so-client