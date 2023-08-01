FROM node:18.15.0

WORKDIR /usr/src/app

COPY . /usr/src/app
# RUN npm install --no-progress --ignore-optional
# RUN npm cache clean -f
RUN npm i -g pnpm

RUN pnpm i 

# --no-progress --ignore-optional
RUN pnpm build