FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
CMD ["npm", "start"]
EXPOSE 3000

# docker run -it -p 3000:3000 --rm --name app app
