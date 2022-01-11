# syntax=docker/dockerfile:1
FROM node:12-alpine
WORKDIR /client 
COPY . .
RUN yarn install --production
CMD ["yarn", "start"]
