# =========================
# 1️⃣ Build Stage
# =========================
FROM node:20-alpine AS builder

# Install dependencies first (better caching)

RUN npm install 

# Copy the rest of the source code
COPY . .

# Build Astro project
RUN npm run build