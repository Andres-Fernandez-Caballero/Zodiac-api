FROM node:alpine3.17 as builder

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

ARG ENV=production
ARG PORT=3000


RUN pnpm run build

ENV PORT=$PORT
EXPOSE $PORT

CMD [ "node", "dist/main.js" ]

