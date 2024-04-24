FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN nextui add table

RUN npm install @nextui-org/react

RUN npm install @react-stately/data

RUN npm i nextjs-progressbar

RUN npm install axios

RUN nextui add button


CMD ["npm", "run", "dev"]
