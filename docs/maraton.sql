-- MariaDB dump 10.19  Distrib 10.4.22-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: maraton
-- ------------------------------------------------------
-- Server version	10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Materias`
--

DROP TABLE IF EXISTS `Materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Materias` (
  `id_materia` tinyint(4) NOT NULL AUTO_INCREMENT,
  `materia` varchar(20) NOT NULL,
  PRIMARY KEY (`id_materia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Materias`
--

LOCK TABLES `Materias` WRITE;
/*!40000 ALTER TABLE `Materias` DISABLE KEYS */;
INSERT INTO `Materias` VALUES (1,'Matemáticas'),(2,'Física'),(3,'Química'),(4,'Psicología'),(5,'Literatura');
/*!40000 ALTER TABLE `Materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Preguntas`
--

DROP TABLE IF EXISTS `Preguntas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Preguntas` (
  `id_pregunta` tinyint(4) NOT NULL,
  `id_materia` tinyint(4) NOT NULL,
  `kilómetro` tinyint(4) DEFAULT NULL,
  `pregunta` char(255) NOT NULL,
  PRIMARY KEY (`id_pregunta`),
  KEY `id_materia` (`id_materia`),
  CONSTRAINT `Preguntas_ibfk_1` FOREIGN KEY (`id_materia`) REFERENCES `Materias` (`id_materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Preguntas`
--

LOCK TABLES `Preguntas` WRITE;
/*!40000 ALTER TABLE `Preguntas` DISABLE KEYS */;
INSERT INTO `Preguntas` VALUES (1,3,1,'¿Qué es un sistema cerrado?'),(2,3,2,'Es la unidad de una magnitud que mide la cantidad de sustancia.'),(3,3,3,'¿Qué es una disolución?'),(4,3,3,'Es el número de moles de soluto en un litro de solución'),(5,3,2,'¿Cuál es el número de oxidación de un átomo neutro?'),(6,3,1,'Es la función de estado que nos indica el calor liberado o absorbido a presión constante en una reacción'),(7,3,1,'Nombre de las partículas de mayor energía que participan en la formación de enlaces.'),(8,3,2,'Tipo de enlace en donde se forman redes cristalinas con enlaces polidireccionales'),(9,3,3,'Electrodo de la celda voltaica en donde se lleva a cabo la oxidación'),(10,3,3,'Número cuántico que indica qué orientación tiene el orbital en el que se encuentra el electrón'),(11,4,2,'¿Quienes fueron los sujetos experimentales en el experimento de Pavlov?'),(12,4,1,'Lóbulo que se encarga de la visión:'),(13,4,1,'Pensamiento crítico que se basa en recopilación cuidadosa de evidencia, descripción, medición exacta, observación controlada y los resultados.'),(14,4,2,'Condiciones alteradas o modificadas por el experimentador.'),(15,4,3,'Condiciones que un experimentador desea evitar que afecten el resultado de un experimento.'),(16,4,3,'Fenómenos, cualidades, rasgos que toman diferentes valores, magnitudes o intensidades. Se dividen en dependiente, independiente y extraña.'),(17,4,2,'Concentración voluntaria de un estímulo sensorial específico, seleccionando y desviando mensajes sensoriales entrantes.'),(18,4,1,'Factores (internos o externos) que permiten a una persona actuar para realizar una acción determinada y recibir una sensación de satisfacción'),(19,4,1,'Motivación que es independiente a cualquier estímulo externo y salen del interior de cada persona'),(20,4,2,'Motivación que provoca que realices acciones para conseguir una recompensa externa.'),(21,1,3,'El dominio de toda función polinómica son todos los números:'),(22,1,3,'Método gráfico que nos permite saber si una gráfica es función'),(23,1,2,'Expresión que nos permite saber si una función es impar'),(24,1,1,'Conjunto de valores que puede tomar la variable independiente'),(25,1,1,'¿Cuál es el valor de la derivada de una constante?'),(26,1,2,'Puntos en los que la gráfica de la función cambia de concavidad, es decir, pasa de cóncava a convexa o viceversa.'),(27,1,3,'¿Cuál es la derivada de sen(x)?'),(28,1,3,'Límite que representa la pendiente de la recta tangente a la gráfica de la función en un punto'),(29,1,2,'¿Cuál es el valor del límite de una constante?'),(30,1,1,'Valor de la derivada de una variable con exponente 1');
/*!40000 ALTER TABLE `Preguntas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Respuestas`
--

DROP TABLE IF EXISTS `Respuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Respuestas` (
  `id_respuesta` tinyint(4) NOT NULL AUTO_INCREMENT,
  `id_pregunta` tinyint(4) NOT NULL,
  `respuesta` varchar(150) DEFAULT NULL,
  `boolCorrect` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_respuesta`),
  KEY `id_pregunta` (`id_pregunta`),
  CONSTRAINT `Respuestas_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `Preguntas` (`id_pregunta`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Respuestas`
--

LOCK TABLES `Respuestas` WRITE;
/*!40000 ALTER TABLE `Respuestas` DISABLE KEYS */;
INSERT INTO `Respuestas` VALUES (1,1,'Aquel sistema donde se intercambia tanto materia como energía.',0),(2,1,'Aquel sistema en donde se puede intercambiar energía pero no materia.',1),(3,1,'Aquel sistema en donde no se puede intercambiar ni materia ni energía.',0),(4,1,'Aquel sistema donde se intercambia materia pero no energía',0),(5,2,'Ampere',0),(6,2,'Candela',0),(7,2,'Mol',1),(8,2,'Volt',0),(9,3,'Mezcla homogénea de dos o más sustancias que no reaccionan químicamente entre sí.',1),(10,3,'Mezcla heterogénea de dos o más sustancias que reaccionan químicamente entre sí.',0),(11,3,'Compuesto de dos o más sustancias que no reaccionan químicamente entre sí.',0),(12,3,'Sustancia química que contiene dos o más elementos químicos diferentes',0),(13,4,'Normalidad',0),(14,4,'Molaridad',1),(15,4,'Molalidad',0),(16,4,'Fracción molar',0),(17,5,'1+',0),(18,5,'1-',0),(19,5,'0',1),(20,5,'2+',0),(21,6,'Fusión',0),(22,6,'Combustión',0),(23,6,'Entropía',0),(24,6,'Entalpía',1),(25,7,'Protones de valencia',0),(26,7,'Protones diferenciales',0),(27,7,'Electrones diferenciales',0),(28,7,'Electrones de valencia',1),(29,8,'Enlace covalente polar',0),(30,8,'Enlace covalente',0),(31,8,'Enlace iónico',1),(32,8,'Enlace metálico',0),(33,9,'Cátodo',0),(34,9,'Ánodo',1),(35,9,'Anión',0),(36,9,'Catión',0),(37,10,'Número cuántico magnético',1),(38,10,'Número cuántico principal',0),(39,10,'Número cuántico de espín',0),(40,10,'Número cuántico secundario',0),(41,11,'Ratones',0),(42,11,'Palomas',0),(43,11,'Perros',1),(44,11,'Personas',0),(45,12,'Lóbulo Parietal',0),(46,12,'Lóbulo Occipital',1),(47,12,'Lóbulo Temporal',0),(48,12,'Lóbulo frontal',0),(49,13,'Pensamiento crítico.',0),(50,13,'Método cientifico.',1),(51,13,'Conductismo.',0),(52,13,'Grupo experimental.',0),(53,14,'Variable dependiente',0),(54,14,'Variable independiente.',1),(55,14,'Variable extraña',0),(56,14,'Ninguna de las anteriores',0),(57,15,'Variable extraña',1),(58,15,'Variable dependiente',0),(59,15,'Entorno',0),(60,15,'Sujeto experimental',0),(61,16,'Grupo',0),(62,16,'Variable',1),(63,16,'Muestra',0),(64,16,'Método',0),(65,17,'Ceguera',0),(66,17,'Atención selectiva.',1),(67,17,'Cuello de botella.',0),(68,17,'Exclusión.',0),(69,18,'Motivación',1),(70,18,'Valencia',0),(71,18,'Perspectiva',0),(72,18,'Comportamiento',0),(73,19,'Motivación Intrínseca',1),(74,19,'Motivación Extrínseca',0),(75,19,'Motivación personal',0),(76,19,'Motivación ambiental',0),(77,20,'Motivación social',0),(78,20,'Motivación extrínseca',1),(79,20,'Motivación intrínseca',0),(80,20,'Motivación externa',0),(81,21,'Reales',1),(82,21,'Naturales',0),(83,21,'Enteros',0),(84,21,'Irracionales',0),(85,22,'Prueba de la línea horizonta',0),(86,22,'Prueba de la línea vertical',1),(87,22,'Prueba de la línea oblicua',0),(88,22,'Prueba de la línea perpendicular',0),(89,23,'f(-x)=f(-x)',0),(90,23,'f(-x)=f(x)',0),(91,23,'f(-x)=-f(x)',1),(92,23,'-f(x)=-f(x)',0),(93,24,'Imagen',0),(94,24,'Codominio',0),(95,24,'Rango',0),(96,24,'Dominio',1),(97,25,'Uno',0),(98,25,'Cero',1),(99,25,'El valor de la misma constante',0),(100,25,'No existe',0),(101,26,'Punto de inflexión',1),(102,26,'Punto máximo relativo',0),(103,26,'Punto mínimo relativo',0),(104,26,'Punto origen',0),(105,27,'tan(x)',0),(106,27,'-sen(x)',0),(107,27,'cos(x)',1),(108,27,'sec(x)',0),(109,28,'Límite al infinito',0),(110,28,'Función racional',0),(111,28,'Antiderivada',0),(112,28,'Derivada',1),(113,29,'Cero',0),(114,29,'El valor de la constante',1),(115,29,'Uno',0),(116,29,'No existe',0),(117,30,'El valor del coeficiente',1),(118,30,'Uno',0),(119,30,'Cero',0),(120,30,'No existe',0);
/*!40000 ALTER TABLE `Respuestas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-08 12:40:07
