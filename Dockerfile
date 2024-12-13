FROM node:20-alpine

WORKDIR /wepapps
COPY . /wepapps

# # Building the app
# RUN yarn cache clean
# RUN yarn
# RUN yarn build

# Building the app
RUN pnpm store prune
RUN pnpm
RUN pnpm build
