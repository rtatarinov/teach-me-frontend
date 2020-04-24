FROM node:10-alpine
WORKDIR /app
COPY . .
RUN yarn && yarn build
ENV NODE_ENV=production
EXPOSE 80
CMD node server.js
