FROM node:bookworm-slim AS builder
ENV NODE_ENV=production

WORKDIR /app

RUN npm install -g pnpm

COPY ["package.json", "pnpm-lock.yaml*", "./"]

RUN pnpm install

COPY . .

RUN pnpm build

# install deps during image build
RUN pnpm install --frozen-lockfile

# start the app
CMD ["pnpm", "start"]
