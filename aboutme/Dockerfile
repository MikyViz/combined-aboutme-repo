FROM node
WORKDIR /app/aboutme
COPY . .
RUN npm cache clean --force
RUN npm install
CMD ["npm", "run", "dev",  "--", "--host"]