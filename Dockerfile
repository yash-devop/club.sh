# Local Development Docker file

FROM node:20-alpine
WORKDIR /usr/src/app
# COPY package* .
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "npm", "run", "dev:docker" ]
