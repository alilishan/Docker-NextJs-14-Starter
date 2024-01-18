FROM node:18.17-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./
EXPOSE 3000
# CMD npm run dev



# FOR DEV
# Build Image
# 1. run docker build -t marc-logs-app . --no-cache

# Map node_modules and run npm install
# 2. run docker run -it -v .:/app -v ./node_modules:/app/node_modules marc-logs-app npm install

# Run Dev
# 3. docker run -it -v .:/app -v ./node_modules:/app/node_modules -p 127.0.0.1:3000:3000 marc-logs-app npm run dev

# Run Build
# 4. docker run -it -v .:/app -v ./node_modules:/app/node_modules marc-logs-app npm run build

# Run Start
# 5. docker run -d --name marc-logs-app-container -it -v .:/app -v ./node_modules:/app/node_modules -p 127.0.0.1:3000:3000 marc-logs-app npm run start

# Up the application - NO NEED
# 3. run docker-compose up
