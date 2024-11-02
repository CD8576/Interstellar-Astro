FROM node:bookworm-slim AS builder
ENV NODE_ENV=production

WORKDIR /app

RUN npm install -g pnpm

COPY ["package.json", "pnpm-lock.yaml*", "./"]

RUN pnpm install

COPY . .

RUN pnpm i
RUN pnpm disable
RUN pnpm build
