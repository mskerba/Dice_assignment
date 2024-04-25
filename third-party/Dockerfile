FROM node:19

RUN apt-get update && apt-get install -y python3

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install @nestjs/common

RUN npm install express

COPY . .

RUN npm run build


CMD [ "npm", "run", "start:dev" ]
