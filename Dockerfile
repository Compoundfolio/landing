FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install --save --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
ENV PORT=3000
CMD ["npm", "run", "serve"]
