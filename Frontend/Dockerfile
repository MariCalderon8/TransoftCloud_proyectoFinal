# Usar la imagen de Node.js para desarrollo
FROM node:18

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias y el código fuente
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que Vue.js usa para desarrollo
EXPOSE 5173

# Ejecutar el servidor de desarrollo
CMD ["npm", "run", "dev"]