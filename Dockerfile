FROM node:8.15.0-alpine

WORKDIR /app

COPY package*.json ./
COPY *.js ./

RUN npm install

VOLUME /app/dist /app/public /app/src /app/build /app/ssr

# production algoritm
#create production dist/v.*.*.* files
#create production ssr/dist/vue-ssr-server-bundle.json
#create launch  for server CMD for node  server.js NODE_ENV=prodaction
#CMD [ "npm", "run", "dev" ]
