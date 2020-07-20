# Pull official base image
# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:13.12.0-alpine

# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# Add App
COPY . ./

# Start App
CMD ng serve --host 0.0.0.0
