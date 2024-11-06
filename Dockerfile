FROM node:bookworm-slim AS builder
ENV NODE_ENV=production

WORKDIR /app


RUN npm install -g pnpm \
    && apt-get update && apt-get install -y git


COPY . .
RUN pnpm install

RUN pnpm add @types/js-cookie

RUN pnpm build
