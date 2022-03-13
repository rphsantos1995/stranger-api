FROM node:alpine
WORKDIR /
COPY . .
CMD ["npm", "start"]