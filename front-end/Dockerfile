# === Build Stage ===
FROM node:21 AS build

WORKDIR /usr/src/app

# Copy only the necessary files for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the TypeScript code and the Vite application
RUN npm run build

# === Production Stage ===
FROM node:21

WORKDIR /usr/src/app

# Copy only the necessary files for running the application
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/public ./public

# Install only production dependencies
RUN npm install --production
RUN npm install --global vite

# Run the application
CMD ["npm", "run", "preview"]
