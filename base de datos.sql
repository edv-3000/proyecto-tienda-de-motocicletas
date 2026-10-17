CREATE DATABASE motorbike;

CREATE TABLE moto(id SERIAL PRIMARY KEY,imagen TEXT,modelo VARCHAR(50),marca VARCHAR(20),cilindrada VARCHAR(20),
categoria VARCHAR(20),precio NUMERIC(15,2));

CREATE TABLE moto_color(id SERIAL PRIMARY KEY,color TEXT,stock INTEGER,id_moto INTEGER NOT NULL,
FOREIGN KEY(id_moto)REFERENCES moto(id) ON DELETE CASCADE);

CREATE TABLE ticket(id SERIAL PRIMARY KEY, nombre VARCHAR(50),correo VARCHAR(50),telefono VARCHAR(20),
id_moto INTEGER NOT NULL, FOREIGN KEY(id_moto) REFERENCES moto(id),
id_color INTEGER NOT NULL, FOREIGN KEY(id_color) REFERENCES moto_color(id),
precio NUMERIC(15,2), categoria VARCHAR(20), estado TEXT, tipo_compra TEXT, 
fecha_creacion DATE DEFAULT CURRENT_DATE, fecha_actualizacion DATE );

CREATE TABLE gestor(id SERIAL PRIMARY KEY, usuario VARCHAR(20), contrasena TEXT, rol TEXT);