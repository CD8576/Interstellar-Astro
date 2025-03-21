FROM node:bookworm-slim AS builder
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y git
RUN npm install -g pnpm

RUN git clone https://github.com/UseInterstellar/Interstellar-Astro
WORKDIR "/Interstellar"

COPY ["package.json", "pnpm-lock.yaml*", "./"]

RUN pnpm install

COPY . .

RUN pnpm build

