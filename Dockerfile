# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml to the container
COPY package.json pnpm-lock.yaml ./

# Install the dependencies using pnpm
RUN pnpm install

# Optionally disable Astro's telemetry
RUN pnpm disable

# Copy the rest of the application files into the container
COPY . .

# Expose the port that the app will run on
EXPOSE 8080

# Run the application in development mode
CMD ["pnpm", "build"]
