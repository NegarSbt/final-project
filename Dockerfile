# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json 
COPY package*.json ./

# Install app dependencies
RUN npm install 

# Copy app source code
COPY . .

# Expose port 8080
EXPOSE 8080

# Define the command to run the app
CMD ["node", "app.js"]
