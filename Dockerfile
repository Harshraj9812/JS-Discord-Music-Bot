FROM node:16.13.1
MAINTAINER Harsh Raj
RUN apt update
RUN apt install git
RUN git clone https://github.com/Harshraj9812/HR-Discord-Music-BOT.git
WORKDIR /HR-Discord-Music-BOT
RUN npm install pm2 -g
RUN npm install
CMD ["pm2-runtime", "index.js"]
