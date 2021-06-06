FROM node:15.14-alpine3.10

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

