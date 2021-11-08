# syntax=docker/dockerfile:1
FROM node:14-alpine
WORKDIR /
COPY ["package.json", "yarn.lock"]
RUN yarn install --production
COPY . .
CMD ["yarn", "start"]
