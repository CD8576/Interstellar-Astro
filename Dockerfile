FROM node:bookworm-slim AS builder
ENV NODE_ENV=production

WORKDIR /app

# Install git if needed
RUN apt-get update && apt-get install -y git && apt-get clean

# Install pnpm
RUN npm install -g pnpm

# Set pnpm to allow all builds (so esbuild/sharp build scripts run)
RUN pnpm config set dangerouslyAllowAllBuilds true

# Copy package and lock files
COPY package.json pnpm-lock.yaml ./

RUN echo "dangerouslyAllowAllBuilds=true" >> ~/.npmrc

# Install dependencies (build scripts will now run)
RUN pnpm install

# Copy rest of source
COPY . .

# Build your project
RUN pnpm build

# Start command
CMD ["sh", "-c", "pnpm install && pnpm start"]


