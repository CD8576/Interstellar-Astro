# =========================
# 1️⃣ Build Stage
# =========================
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build Astro project
RUN npm run build


# =========================
# 2️⃣ Production Runtime
# =========================
FROM node:20-alpine AS runner

# Security: non-root user
RUN addgroup -g 1001 nodejs \
  && adduser -u 1001 -G nodejs -s /bin/sh -D astro

WORKDIR /app

# Copy only the build output and necessary files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the Astro server port
EXPOSE 3000

# Switch to non-root user
USER astro

# Start Astro Node server
CMD ["node", "dist/server/entry.mjs"]