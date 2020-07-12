FROM node:alpine

COPY . /home/node/app

WORKDIR /home/node/app

RUN npm install

ENTRYPOINT npm start