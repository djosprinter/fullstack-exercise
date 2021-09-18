FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

# COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]