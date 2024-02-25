FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm cache clean c--force
RUN npm install --save --legacy-peer-deps --force
COPY . .
RUN npm run build
EXPOSE 3000
ENV PORT=3000
CMD ["npm", "run", "serve"]
