FROM node:latest

WORKDIR ./

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 8080

cmd ["npm", "start"]
