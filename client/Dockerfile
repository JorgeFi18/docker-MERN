# Stage 1

FROM node:12.19.0-alpine as builder

RUN mkdir /app

WORKDIR /app

COPY package.json /app
COPY nginx.conf /etc/nginx/nginx.conf

RUN npm install -s

COPY . /app

RUN npm run build

#Stage 2

FROM nginx:1.17.1-alpine
COPY --from=builder /app/build /usr/share/nginx/html