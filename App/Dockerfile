FROM node:12
WORKDIR /opt/app
COPY package.json ./
RUN ["yarn", "install"]
COPY . .
CMD ["yarn", "start"]
EXPOSE 3000