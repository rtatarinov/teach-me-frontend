FROM node:12.16-alpine AS build
WORKDIR /app
COPY . .
RUN yarn install --non-interactive && yarn build

FROM node:12.16-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/server.js .
COPY --from=build /app/env.js .
COPY --from=build /app/ssl .
ENV NODE_ENV=production
RUN yarn add fastify && yarn add fastify-static

EXPOSE 80 443
CMD ["node", "server.js"]
