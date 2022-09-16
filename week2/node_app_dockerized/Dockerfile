FROM node

WORKDIR /nodeapp

COPY package.json /nodeapp

RUN npm install

COPY . /nodeapp 

EXPOSE 3000

CMD ["node","app.js"]