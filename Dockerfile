FROM node:bookworm AS builder
ENV NODE_ENV=production

WORKDIR /app

RUN npm install -g pnpm

COPY ["package.json", "pnpm-lock.yaml*", "./"]

COPY . .

RUN pnpm i

RUN pnpm build
