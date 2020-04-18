FROM node:10-alpine
WORKDIR /app
COPY . .
RUN yarn && yarn build
EXPOSE 80
CMD node server.js
