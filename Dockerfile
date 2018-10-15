FROM node:9.11.1

ENV PORT=3000

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY ./server.js /app

CMD node server.js

EXPOSE 3000
