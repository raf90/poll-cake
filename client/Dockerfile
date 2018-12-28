FROM node:11.1.0

RUN mkdir -p /srv/app/
WORKDIR /srv/app/

COPY . /srv/app/

RUN npm install

CMD ["npm", "start"]