FROM node:21

WORKDIR /wepapps
COPY . /wepapps

# Building the app
RUN yarn cache clean
RUN yarn
RUN yarn build