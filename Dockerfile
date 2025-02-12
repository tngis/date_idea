FROM node:20.12.1

WORKDIR /app

COPY /package*.json ./

RUN npm install

COPY ./ .

EXPOSE 3000
RUN npm run build
ENTRYPOINT [ "npm", "run", "start" ]