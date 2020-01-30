FROM node:12.14.1-alpine

# Checking container status
# HEALTHCHECK --interval=5s --timeout=3s CMD node src/healthcheck.js || exit 1

# Create app directory
WORKDIR /usr/src/app

# Copy sources
COPY ./package*.json ./
COPY ./src ./src
COPY ./.env ./
COPY ./docker-entry.sh ./

# Install app dependencies
RUN npm install --only=production && npm run build

CMD [ "./docker-entry.sh" ]
