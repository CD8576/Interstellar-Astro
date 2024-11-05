FROM node:bookworm AS builder
ENV NODE_ENV=production

WORKDIR /app

RUN npm install -g pnpm
RUN pnpm add -g pnpm

RUN pnpm add js-cookie
RUN pnpm add @types/js-cookie
RUN pnpm add js-cookie@3.0.0

COPY ["package.json", "pnpm-lock.yaml*", "./"]

COPY . .

RUN pnpm i

RUN pnpm install --force

RUN pnpm build
