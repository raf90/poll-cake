FROM node:11.1.0

RUN mkdir -p /srv/app/
WORKDIR /srv/app/

COPY . /srv/app/

RUN npm install
RUN npm install -g nodemon

CMD ["npm", "start"]