FROM node:12.19.0-alpine

WORKDIR /usr/src/app

ENV DATABASE_HOST=localhost

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]