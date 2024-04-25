FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli

RUN npm install @nestjs/common

RUN npm i @nestjs/mongoose mongoose

RUN npm install @nestjs/axios axios


COPY . .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]
