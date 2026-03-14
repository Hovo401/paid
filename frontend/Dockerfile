FROM node:24-alpine

RUN corepack enable
WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host"]