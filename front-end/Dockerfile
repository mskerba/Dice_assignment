FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install @nextui-org/react

RUN npm install @react-stately/data

RUN npm i nextjs-progressbar

RUN npm install axios

RUN npm run build

CMD ["npm", "start"]
