FROM node:latest as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm set progress=false && npm install

COPY . .
RUN npm run build-only

FROM nginx:alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
RUN chown nginx:nginx -R /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]