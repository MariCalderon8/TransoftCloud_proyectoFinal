-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: pruebacloud
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- create database pruebacloud;
use pruebacloud;
--
-- Table structure for table `destino`
--

DROP TABLE IF EXISTS `destino`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destino` (
  `iddestino` int NOT NULL,
  `destino` varchar(45) DEFAULT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`iddestino`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destino`
--

LOCK TABLES `destino` WRITE;
/*!40000 ALTER TABLE `destino` DISABLE KEYS */;
INSERT INTO `destino` VALUES (1,'BOGOTA',1),(2,'BARRANQUILLA',1);
/*!40000 ALTER TABLE `destino` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origen`
--

DROP TABLE IF EXISTS `origen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `origen` (
  `idorigen` int NOT NULL,
  `origen` varchar(45) DEFAULT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`idorigen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origen`
--

LOCK TABLES `origen` WRITE;
/*!40000 ALTER TABLE `origen` DISABLE KEYS */;
INSERT INTO `origen` VALUES (1,'BOGOTA',1),(2,'MEDELLIN',1);
/*!40000 ALTER TABLE `origen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `persona` (
  `id_persona` int NOT NULL,
  `nombre_completo` varchar(100) DEFAULT NULL,
  `tipo_id` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `tipo_persona` varchar(45) DEFAULT NULL,
  `correo_electronico` varchar(45) DEFAULT NULL,
  `usuario_creador` int NOT NULL,
  `activo` tinyint NOT NULL,
  PRIMARY KEY (`id_persona`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (1018458900,'JHON JAIRO DIAZ AVENDAÑO','CC',NULL,'CONDUCTOR','a@hotmail.com',1018458900,1);
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `roles` varchar(45) DEFAULT NULL,
  `activo` tinyint NOT NULL,
  `contraseña` char(60) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1018458900,'Jhon Diaz','ADMINISTRADOR',1,'12345');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehiculo_nube`
--

DROP TABLE IF EXISTS `vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehiculo` (
  `placa` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tipo_vehiculo` char(50) DEFAULT NULL,
  `propietario` int NOT NULL,
  `marca` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `modelo` int DEFAULT NULL,
  `chasis` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `motor` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `capacidad_carga` int DEFAULT NULL,
  `foto` longtext,
  `activo` tinyint NOT NULL,
  `usuario` int DEFAULT NULL,
  PRIMARY KEY (`placa`),
  KEY `fk_propietario_idx` (`propietario`),
  KEY `fk_usuario_idx` (`Usuario`),
  CONSTRAINT `fk_propietario` FOREIGN KEY (`propietario`) REFERENCES `usuario` (`idusuario`),
  CONSTRAINT `fk_usuarioveh` FOREIGN KEY (`Usuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehiculo_nube`
--

LOCK TABLES `vehiculo` WRITE;
/*!40000 ALTER TABLE `vehiculo` DISABLE KEYS */;
INSERT INTO `vehiculo` VALUES ('AUQ425','1',1018458900,'RENAULT',2006,'ASA121635','ASA96652',2000,NULL,1,1018458900),('EFQ425','1',1018458900,'RENAULT',2006,'ASA121635','ASA96652',2000,NULL,1,1018458900),('MNQ707','CAMION NHR',1018458900,'CHEVROLET',2020,'ASAS2584','ASAS2584',2500,NULL,1,1018458900);
/*!40000 ALTER TABLE `vehiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viaje_nube`
--

DROP TABLE IF EXISTS `viaje`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viaje` (
  `idviaje` int NOT NULL,
  `origen` int NOT NULL,
  `destino` int NOT NULL,
  `cliente` int NOT NULL,
  `valorpagar` float DEFAULT NULL,
  `valorcobrar` float DEFAULT NULL,
  `conductor` int NOT NULL,
  `placa` char(10) NOT NULL,
  `usuario_creador` int NOT NULL,
  PRIMARY KEY (`idviaje`),
  KEY `fk_conductor_idx` (`conductor`),
  KEY `fk_placa_idx` (`placa`) /*!80000 INVISIBLE */,
  KEY `fk_origen_idx` (`origen`),
  KEY `fk_destino_idx` (`destino`),
  KEY `fk_cliente_idx` (`cliente`),
  KEY `fk_usuario_idx` (`usuario_creador`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`cliente`) REFERENCES `persona` (`id_persona`),
  CONSTRAINT `fk_conductor` FOREIGN KEY (`conductor`) REFERENCES `persona` (`id_persona`),
  CONSTRAINT `fk_destino` FOREIGN KEY (`destino`) REFERENCES `destino` (`iddestino`),
  CONSTRAINT `fk_origen` FOREIGN KEY (`origen`) REFERENCES `origen` (`idorigen`),
  CONSTRAINT `fk_usuario` FOREIGN KEY (`usuario_creador`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viaje_nube`
--

LOCK TABLES `viaje` WRITE;
/*!40000 ALTER TABLE `viaje` DISABLE KEYS */;
INSERT INTO `viaje` VALUES (1,1,2,1018458900,256000,300000,1018458900,'AUQ425',1018458900);
/*!40000 ALTER TABLE `viaje` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-11 21:34:42
