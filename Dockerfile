# version de node
FROM node:18.12.1

# abrimos/creamos carpeta en este directorio
RUN mkdir -p /usr/src/app

# nos ubicamos en esta carpeta
WORKDIR /usr/src/app

# Copiamos todos los archivos
COPY package*.json ./

# instalamos dependencias
RUN npm install

# Copiamos lo que esta dentro de la capeta src
COPY src ./

COPY . .
# Exponemos en el puerto 3000
EXPOSE 3000
# ejecutamos la app
CMD [ "npm", "run", "start"]