-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: wonouserdata
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apply_form`
--

DROP TABLE IF EXISTS `apply_form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apply_form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jobTitle` varchar(255) DEFAULT NULL,
  `namee` varchar(255) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `application_date` date DEFAULT NULL,
  `PhoneNumber` varchar(15) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `experience` int DEFAULT NULL,
  `linkedInProfile` varchar(255) DEFAULT NULL,
  `resumelink` varchar(255) DEFAULT NULL,
  `monthlySalary` decimal(10,2) DEFAULT NULL,
  `expectedSalary` decimal(12,2) DEFAULT NULL,
  `daysToJoin` varchar(255) DEFAULT NULL,
  `relocateGoa` tinyint(1) DEFAULT NULL,
  `personality` text,
  `skills` text,
  `specialexperience` text,
  `willing` text,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apply_form`
--

LOCK TABLES `apply_form` WRITE;
/*!40000 ALTER TABLE `apply_form` DISABLE KEYS */;
INSERT INTO `apply_form` VALUES (1,'UI Designer','Aiwin Raj','aiwinraj1810@gmail.com','2024-08-15','1234567890','Kerala	',1,'asdaasdasd','C:\\fakepath\\WONOCO-black-bg (1).png',100000.00,200000.00,'15 Days',0,'yyy','uuu','iiii','oooo','pppp'),(2,'Software Engineer','John Doe','john.doe@example.com','2024-08-20','123-456-7890','Goa',5,'linkedin.com/in/johndoe','resume.com/johndoe',5000.00,7000.00,'30',1,'Creative','JavaScript, React','Lead Developer','Open to new challenges','Looking forward to new opportunities');
/*!40000 ALTER TABLE `apply_form` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrationdetails`
--

DROP TABLE IF EXISTS `registrationdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrationdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `industry` varchar(100) DEFAULT NULL,
  `companySize` varchar(50) DEFAULT NULL,
  `companyType` varchar(50) DEFAULT NULL,
  `companyCity` varchar(100) DEFAULT NULL,
  `companyState` varchar(100) DEFAULT NULL,
  `websiteURL` varchar(255) DEFAULT NULL,
  `linkedinURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrationdetails`
--

LOCK TABLES `registrationdetails` WRITE;
/*!40000 ALTER TABLE `registrationdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `registrationdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_data`
--

DROP TABLE IF EXISTS `user_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_data` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `industry` varchar(100) DEFAULT NULL,
  `companySize` varchar(50) DEFAULT NULL,
  `companyType` varchar(50) DEFAULT NULL,
  `companyCity` varchar(100) DEFAULT NULL,
  `companyState` varchar(100) DEFAULT NULL,
  `websiteURL` varchar(255) DEFAULT NULL,
  `linkedinURL` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_data`
--

LOCK TABLES `user_data` WRITE;
/*!40000 ALTER TABLE `user_data` DISABLE KEYS */;
INSERT INTO `user_data` VALUES (1,'John Doe','1234567890','john.doe@example.com','USA','New York','NY','Doe Enterprises','Technology','Medium','Private','New York','NY','https://www.doeenterprises.com','https://www.linkedin.com/in/johndoe',NULL,NULL,NULL),(6,'Aiwin Raj','7904895106','aiwinraj1018@gmail.com','India','Bangalore','Karnataka','PasswordComp','Workation','100-200','Sole Proprietorship','Bangalore','Karnataka','ooooo','pppppp','AiwinRaj','123456',NULL),(7,'Aiwin Raj','7904895106','aiwinraj788@gmail.com','India','Mumbai','Maharashtra','AiwinCo','Workation','100-200','Public Limited','Mumbai','Maharashtra','pppp','llll','AiwinRaj','AiwinRaj@Wono8410',NULL);
/*!40000 ALTER TABLE `user_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_services`
--

DROP TABLE IF EXISTS `user_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_services` (
  `user_id` int NOT NULL,
  `service_name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`,`service_name`),
  CONSTRAINT `user_services_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_data` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_services`
--

LOCK TABLES `user_services` WRITE;
/*!40000 ALTER TABLE `user_services` DISABLE KEYS */;
INSERT INTO `user_services` VALUES (6,'service1'),(6,'service3'),(7,'service1'),(7,'service4');
/*!40000 ALTER TABLE `user_services` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-30 11:34:10
