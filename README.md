# Dockerized MERN

## Requisites
- NodeJS (npm)
- Docker
- Docker compose


## Run application

Just type the following commands:
```sh
# Building Docker images
docker-compose build

# Run containers
docker-compose up
```

## Development environment

### Instalations

```bash
# Installing client dependencies
cd client
npm install
```

```bash
# Installing server dependencies
cd server
npm install
```

> **server application needs a mongo running**

```sh
# Run this script to have a mongo container running
bash start-db.sh
```

> *Or install mongodb locally*


Run client (React)
```sh
cd client
npm run dev
```

Run server (express)
```sh
cd server
npm run dev
```

## Run standalone Docker containers

```sh
# Running client container
cd client

# Building image
bash build-docker.sh
## or
docker build -t so-client .

# Running container
bash start-docker.sh
## or
docker run -p 80:80 --rm --name docker-so-client so-client

# Stoping container
bash stop-docker.sh
## or
docker rm -f docker-so-client

```

```sh
# Running server
** Dont forget to have mongo running **
cd server

# Building image
bash build-docker.sh
## or
docker build -t so-server .

# Running container
bash start-docker.sh
## or
docker run -p 4000:4000 --rm --name docker-so-server so-server

# Stoping container
bash stop-docker.sh
## or
docker rm -f docker-so-server
```

