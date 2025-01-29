# Use the Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present) to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the entire app code
COPY . .

# Expose the port for the application
EXPOSE 7020

# Start the application
CMD ["npm", "run", "server"]
