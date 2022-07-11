FROM node:latest as node
WORKDIR /app
COPY  . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY  --from=node /app/nginx/*  /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/end-to-end-ecommerce  /user/share/nginx/html