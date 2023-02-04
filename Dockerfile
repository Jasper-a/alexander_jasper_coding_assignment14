FROM node:13.12.0-alpine

ENV APP_HOME /alexander_jasper_final_site
WORKDIR $APP_HOME

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent

ENV PORT 5575

EXPOSE 5575

COPY . .
CMD ["npm", "run", "start"]