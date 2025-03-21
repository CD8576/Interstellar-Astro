FROM ubuntu:latest
ENV NODE_ENV=production
RUN apt-get update && apt-get install -y git

RUN git clone https://github.com/UseInterstellar/Interstellar-Astro
WORKDIR "/Interstellar"

RUN npm install 
RUN npm start

