FROM ubuntu:latest
RUN apt-get update && apt-get install -y git
RUN npm install -g pnpm

RUN git clone https://github.com/UseInterstellar/Interstellar-Astro
WORKDIR "/Interstellar"

RUN pnpm install 
RUN pnpm start

