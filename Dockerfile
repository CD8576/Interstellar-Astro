FROM node:bookworm-slim AS builder
ENV NODE_ENV=production

WORKDIR /app

# Install git (needed for git commands and some pnpm installs)
RUN apt-get update && apt-get install -y git && apt-get clean

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY ["package.json", "pnpm-lock.yaml*", "./"]

# Install dependencies
RUN pnpm install

# Copy all source files
COPY . .

# Install deps at build time
RUN pnpm install --frozen-lockfile

# Build
RUN pnpm build

# Runtime starts with only start command
CMD ["pnpm", "install", "&&", "pnpm", "start"]

