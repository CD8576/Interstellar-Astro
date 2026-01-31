FROM node:bookworm-slim AS builder
ENV NODE_ENV=production

WORKDIR /app

# Install pnpm and bun globally
RUN npm install -g pnpm bun

COPY ["package.json", "pnpm-lock.yaml*", "./"]

RUN pnpm install
# Install dependencies with bun and start the app
RUN bun install

CMD ["bun", "start"]
