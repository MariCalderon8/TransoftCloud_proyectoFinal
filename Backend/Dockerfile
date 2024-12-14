# Utilizar una imagen base oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos al contenedor
COPY . .

# Exponer el puerto en el que corre el backend
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "index.js"]
