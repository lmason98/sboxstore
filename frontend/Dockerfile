FROM node:18.18.0

WORKDIR /frontend

COPY . /frontend

RUN npm install

EXPOSE 3000

RUN chmod +x /frontend/entrypoint.sh

ENTRYPOINT ["/frontend/entrypoint.sh"]