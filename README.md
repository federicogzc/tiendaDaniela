# Tienda Daniela - Dashboard de Administración

Este proyecto consiste en una aplicación web desarrollada para "Tienda Daniela", un negocio que ha crecido significativamente a lo largo de los años. La aplicación ayuda en la administración diaria de ventas, productos y usuarios, facilitando las operaciones y mejorando la eficiencia.

## Propósito 🎯

El propósito principal de esta aplicación es permitir a Daniela y a sus empleados gestionar efectivamente las ventas diarias, el inventario de productos y la información del usuario, además de proporcionar informes diarios y mensuales sobre las ventas realizadas.

## Funcionalidades Principales 🚀

- **Administración de Ventas:** Crear, actualizar, eliminar y listar ventas.
- **Administración de Productos:** Agregar, actualizar, eliminar y listar productos.
- **Administración de Usuarios:** Crear, actualizar, eliminar y listar usuarios, además de asignar roles.
- **Reportes:** Cálculo de ventas totales diarias y balances mensuales.

## Arquitectura Técnica 🏗️

### Backend

El backend está desarrollado en Node.js, utilizando Express como framework para facilitar la creación de las API endpoints. Se usa SQLite como sistema de gestión de base de datos para almacenar información de ventas, productos y usuarios.

- **Node.js:** Ambiente de ejecución para JavaScript del lado del servidor.
- **Express:** Framework de Node.js que facilita la creación de aplicaciones web y API.
- **SQLite:** Base de datos ligera y autónoma que no requiere un servidor de base de datos separado.

### Frontend

El frontend está construido con React, permitiendo una interfaz de usuario interactiva y dinámica.

- **React:** Biblioteca de JavaScript para construir interfaces de usuario con componentes reutilizables y eficientes.

### Docker 🐳

La aplicación está dockerizada, lo que significa que se puede desplegar y ejecutar en cualquier entorno que soporte Docker, asegurando la consistencia entre los entornos de desarrollo y producción.

## Cómo Iniciar 🚀

Para ejecutar la aplicación utilizando Docker, sigue estos pasos:

1. Clona el repositorio:
git clone [https://github.com/federicogzc/tiendaDaniela.git]
cd tiendaDaniela

markdown
Copiar código
2. Construye y ejecuta los contenedores con Docker Compose:
docker-compose up --build

markdown
Copiar código
3. Accede al frontend desde tu navegador:
http://localhost

markdown
Copiar código
4. El backend está accesible en:
http://localhost:3000

perl
Copiar código

## Contacto

Si tienes preguntas o necesitas más información, no dudes en contactarme a través de [federicogzc@gmail.com].
