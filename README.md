plicación desplegada: Pendiente de publicación.

🛠️ Tecnologías utilizadas

Frontend

React

Vite

React Router DOM

Bootstrap

Axios

Backend

Node.js

Express

PostgreSQL

JSON Web Token (JWT)

Bcrypt

Cloudinary

Multer

⚙️ Funcionalidades

Clientes

Visualización del catálogo de motocicletas.

Consulta de tickets mediante número de ticket o correo electrónico.

Solicitud de compra de motocicletas.

Gestión

Visualización y administración de tickets.

Modificación de los datos de las solicitudes.

Actualización del estado de los tickets.

Asociación de tickets con motocicletas disponibles.

Gestión de motocicletas e inventario.

Administración

Acceso mediante autenticación.

Administración de usuarios gestores según sus permisos.

📂 Estructura del proyecto

proyecto-tienda-de-motocicletas/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── package.json
│   └── node.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── imagenes motos/
├── base de datos.sql
└── README.md

💻 Instalación y ejecución local

1. Clonar el repositorio

git clone https://github.com/edv-3000/proyecto-tienda-de-motocicletas.git

Ingresar al proyecto:

cd proyecto-tienda-de-motocicletas

2. Configurar la base de datos

Se necesita tener PostgreSQL instalado.

Crear la base de datos y ejecutar el archivo base de datos.sql para generar las tablas del proyecto.

Configurar las credenciales de conexión en el archivo de entorno del backend.

3. Instalar y ejecutar el backend

cd backend
npm install
node node.js

4. Instalar y ejecutar el frontend

Abrir otra terminal:

cd frontend
npm install
npm run dev

La aplicación estará disponible en la dirección local que indique Vite en la terminal.

🔐 Variables de entorno

El backend requiere configurar las credenciales de PostgreSQL, los datos de autenticación y las credenciales de Cloudinary.

Estas variables deben configurarse en el entorno de ejecución y no deben publicarse en GitHub.

📌 Autor

Edgar Domínguez

Proyecto desarrollado como entrega final del curso Full Stack JavaScript de Desafío Latam.

## 🚀 Proyecto desplegado

**Ver aplicación:** [LONG WAY - Tienda de motocicletas](https://proyecto-tienda-de-motocicletas-six.vercel.app/)
