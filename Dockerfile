# build environment
FROM node:17-alpine3.14 as build
WORKDIR /app
COPY package.json ./
RUN npm config set legacy-peer-deps true
RUN npm install -- force
RUN npm install react-scripts@3.4.1 -g --silent --force 
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
# Copy built assets from builder
COPY --from=build /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]