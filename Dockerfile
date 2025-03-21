FROM ubuntu:latest
RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/UseInterstellar/Interstellar-Astro
WORKDIR "/Interstellar"

RUN pnpm install && pnpm start

