FROM node:16.14.0-alpine as build
ENV TZ America/Bogota
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install 
RUN apk add nano
COPY . ./
RUN npm run build
FROM nginx:1.21.6
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]