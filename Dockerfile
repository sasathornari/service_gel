FROM node:12.14.1

# Create app directory
WORKDIR /usr/src/services

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./


# If you are building your code for production
# RUN npm ci --only=production

RUN apt update && apt install git -y

RUN git clone https://github.com/sasathornari/my3plus_v1.5.git /usr/src/services

RUN npm install

RUN npm install express cors morgan body-parser fs https

RUN npm install pm2 -g

# Bundle app source
# COPY . .

EXPOSE 3005
#CMD [ "node", "build/index.js" ]
CMD ["pm2-runtime", "build/index.js"]