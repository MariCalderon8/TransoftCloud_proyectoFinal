create database transoftcloud_bd;
use transoftcloud_bd;

CREATE TABLE `ciudad` (
  `idciudad` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idciudad`)
  );

CREATE TABLE `usuario` (
  `idusuario` int NOT NULL,
  `correo` varchar(255) unique not null,
  `nombre` varchar(45) DEFAULT NULL,
  `rol` varchar(45) DEFAULT NULL,
  `estaActivo` boolean NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ;

CREATE TABLE `vehiculo` (
  `placa` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tipo_vehiculo` char(50) DEFAULT NULL,
  `propietario` int NOT NULL,
  `marca` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modelo` varchar(50) DEFAULT NULL,
  `chasis` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `motor` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `capacidad_carga` int DEFAULT NULL,
  `foto` longtext,
  `activo` boolean NOT NULL,
  `usuario` int DEFAULT NULL,
  PRIMARY KEY (`placa`),
  KEY `fk_propietario_idx` (`propietario`),
  KEY `fk_usuario_idx` (`usuario`),
  CONSTRAINT `fk_propietario` FOREIGN KEY (`propietario`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `fk_usuarioveh` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`idusuario`)
) ;

CREATE TABLE `viaje` (
  `idviaje` int NOT NULL AUTO_INCREMENT,
  `origen` int NOT NULL,
  `destino` int NOT NULL,
  `cliente` int NOT NULL,
  `valortotal` DECIMAL(10, 2) DEFAULT NULL,
  `valorpagar` DECIMAL(10, 2) DEFAULT NULL,
  `conductor` int NOT NULL,
  `placa` char(10) NOT NULL,
  `usuario_creador` int NOT NULL,
  PRIMARY KEY (`idviaje`),
  KEY `fk_conductor_idx` (`conductor`),
  KEY `fk_placa_idx` (`placa`),
  KEY `fk_origen_idx` (`origen`),
  KEY `fk_destino_idx` (`destino`),
  KEY `fk_cliente_idx` (`cliente`),
  KEY `fk_usuario_idx` (`usuario_creador`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`cliente`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `fk_conductor` FOREIGN KEY (`conductor`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `fk_destino` FOREIGN KEY (`destino`) REFERENCES `ciudad` (`idciudad`),
  CONSTRAINT `fk_origen` FOREIGN KEY (`origen`) REFERENCES `ciudad` (`idciudad`),
  CONSTRAINT `fk_usuario` FOREIGN KEY (`usuario_creador`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `fk_vehiculo` FOREIGN KEY (`placa`) REFERENCES `vehiculo` (`placa`)
) ;

-- Insertar usuario con rol ADMIN
INSERT INTO `usuario` (`idusuario`, `correo`, `nombre`, `rol`, `estaActivo`, `contrasena`)
VALUES 
('10000', 'admin@transoftcloud.com', 'Admin', 'ADMIN', 1, '123');

-- Insertar usuario con rol CLIENTE
INSERT INTO `usuario` (`idusuario`, `correo`, `nombre`, `rol`, `estaActivo`, `contrasena`)
VALUES 
('10001', 'cliente@transoftcloud.com', 'Cliente', 'CLIENTE', 1, '123');

-- Insertar usuario con rol CONDUCTOR
INSERT INTO `usuario` (`idusuario`, `correo`, `nombre`, `rol`, `estaActivo`, `contrasena`)
VALUES 
('10002', 'conductor@transoftcloud.com', 'Conductor', 'CONDUCTOR', 1, '123');

INSERT INTO `ciudad` (`nombre`)
VALUES 
('Bogotá'),
('Medellín'),
('Cali'),
('Barranquilla'),
('Cartagena'),
('Cúcuta'),
('Bucaramanga'),
('Pereira'),
('Santa Marta'),
('Ibagué'),
('Manizales'),
('Villavicencio'),
('Pasto'),
('Armenia'),
('Montería'),
('Neiva'),
('Sincelejo'),
('Popayán'),
('Riohacha'),
('Valledupar');


