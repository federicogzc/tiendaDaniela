# Utilizar una imagen base de Node.js
FROM node:14 as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración del proyecto
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todos los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Fase de producción
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto para el servidor web
EXPOSE 80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
