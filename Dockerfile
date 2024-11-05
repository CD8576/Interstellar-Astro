# Base image for building the application
FROM node:bookworm-slim AS builder

# Set environment variables
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Install Git for Astro config (if needed)
RUN apt-get update && apt-get install -y git

# Copy package.json and lock files, then install dependencies
COPY ["package.json", "pnpm-lock.yaml*", "./"]

# Install dependencies
RUN pnpm i

# Optional: Disable Astro's Telemetry
RUN pnpm disable

# Copy remaining application files
COPY . .

# Run the build command
RUN pnpm build
