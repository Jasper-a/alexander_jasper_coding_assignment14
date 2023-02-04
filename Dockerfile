FROM node:13.12.0-alpine

ENV APP_HOME /alexander_jasper_final_site
WORKDIR $APP_HOME

ENV PORT 5574

EXPOSE 5574

COPY . .
CMD ["npm", "run", "storybook"]