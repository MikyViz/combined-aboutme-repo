FROM node
WORKDIR /app/aboutmebe
COPY . .
RUN npm cache clean --force
RUN npm install
CMD ["node", "server.js"]