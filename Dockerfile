# Etapa 1: build da aplicação Angular
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: servir com NGINX
FROM nginx:alpine
COPY --from=build /app/dist/labseq-web /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
