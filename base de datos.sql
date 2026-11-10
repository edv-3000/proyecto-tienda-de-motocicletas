CREATE DATABASE motorbike;

CREATE TABLE moto ( id SERIAL PRIMARY KEY, imagen TEXT, modelo VARCHAR(50), marca VARCHAR(20), 
cilindrada VARCHAR(20), categoria VARCHAR(20), precio NUMERIC(15,2), stock INTEGER NOT NULL, estado INTEGER
);

CREATE TABLE ticket ( id SERIAL PRIMARY KEY, nombre VARCHAR(50), correo VARCHAR(50), 
telefono VARCHAR(20), id_moto INTEGER NOT NULL REFERENCES moto(id), precio NUMERIC(15,2), estado TEXT, 
tipo_compra TEXT, fecha_creacion DATE DEFAULT CURRENT_DATE, fecha_actualizacion DATE
);

CREATE TABLE gestor ( id SERIAL PRIMARY KEY, usuario VARCHAR(20), contrasena TEXT, rol TEXT
);