FROM node:16-alpine

WORKDIR /react-app

RUN apk add python3 make gcc g++

COPY package*.json /react-app

RUN npm install

COPY . /react-app

RUN cd /react-app

EXPOSE 1234

CMD ["npm", "run", "build"]