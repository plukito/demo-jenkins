FROM node:14-alpine

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY index.js index.js

EXPOSE 3000

CMD ["node", "index.js"]

