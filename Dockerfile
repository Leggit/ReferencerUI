# Docker being used to help get around old node version dependency

FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli@^11.0.0

RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng", "build", "--prod"]
