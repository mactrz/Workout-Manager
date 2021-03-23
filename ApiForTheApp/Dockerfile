FROM node:12
WORKDIR /opt/app
COPY package.json ./
RUN ["npm", "install"]
COPY . .
CMD ["node", "index.js"]
EXPOSE 5000