FROM node:25-alpine

WORKDIR /app

# Mise à jour des paquets système Alpine
RUN apk update && apk upgrade --no-cache

COPY package*.json ./

# Installation reproductible des dépendances
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]