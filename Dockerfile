FROM node:bookworm-slim AS builder
ENV NODE_ENV=production

WORKDIR /app

# Install required packages
RUN apt-get update && apt-get install -y git

# Install pnpm globally
RUN npm install -g pnpm
RUN npm i --save-dev @types/js-cookie
# Copy package files and install dependencies with frozen lockfile
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm install --frozen-lockfile
RUN pnpm update @astrojs/node

# Copy application code
COPY . .
RUN pnpm add -D @types/js-cookie

# Run the build command
RUN pnpm build
