# Stage 1: Build
FROM node:18 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/ClinicaFront /usr/share/nginx/html
EXPOSE 6661
CMD ["nginx", "-g", "daemon off;" ]
