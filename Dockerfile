FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --legacy-peer-deps --prefer-offline --no-audit --progress=false --loglevel=error --no-fund --no-package-lock --ignore-scripts --only=prod --no-optional --no-shrinkwrap -j 4

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npx", "http-server", "dist"]
