CREATE DATABASE  IF NOT EXISTS `house_of_games` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `house_of_games`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: house_of_games
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'best-sellers','2020-08-12 19:14:20','2020-08-12 19:14:20'),(2,'free-to-play','2020-08-13 00:14:02','2020-08-13 00:14:02'),(3,'coming-soon','2020-08-13 00:14:26','2020-08-13 00:14:26'),(4,'on-sale','2020-08-13 00:14:40','2020-08-13 00:14:40'),(5,'early-bird','2020-08-13 00:15:00','2020-08-13 00:15:00');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `description` varchar(100) NOT NULL,
  `descriptionMedium` varchar(600) NOT NULL,
  `descriptionBig` varchar(400) NOT NULL,
  `price` decimal(50,2) NOT NULL,
  `video` varchar(100) NOT NULL,
  `launch_date` datetime NOT NULL,
  `editor` varchar(50) NOT NULL,
  `classification` varchar(1) NOT NULL,
  `rating` decimal(10,2) NOT NULL,
  `stock_user` int(100) NOT NULL,
  `stock_admin` int(100) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games-categories`
--

DROP TABLE IF EXISTS `games-categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games-categories` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(10) unsigned NOT NULL,
  `id_categorie` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_categorie` (`id_categorie`),
  CONSTRAINT `games-categories_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games-categories_ibfk_2` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games-categories`
--

LOCK TABLES `games-categories` WRITE;
/*!40000 ALTER TABLE `games-categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `games-categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games-genres`
--

DROP TABLE IF EXISTS `games-genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games-genres` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(100) unsigned NOT NULL,
  `id_genre` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_genre` (`id_genre`),
  CONSTRAINT `games-genres_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games-genres_ibfk_2` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games-genres`
--

LOCK TABLES `games-genres` WRITE;
/*!40000 ALTER TABLE `games-genres` DISABLE KEYS */;
/*!40000 ALTER TABLE `games-genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games-platforms`
--

DROP TABLE IF EXISTS `games-platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games-platforms` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_games` int(100) unsigned DEFAULT NULL,
  `id_platforms` int(100) unsigned DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_games` (`id_games`),
  KEY `id_platforms` (`id_platforms`),
  CONSTRAINT `games-platforms_ibfk_1` FOREIGN KEY (`id_games`) REFERENCES `games` (`id`),
  CONSTRAINT `games-platforms_ibfk_2` FOREIGN KEY (`id_platforms`) REFERENCES `platforms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games-platforms`
--

LOCK TABLES `games-platforms` WRITE;
/*!40000 ALTER TABLE `games-platforms` DISABLE KEYS */;
/*!40000 ALTER TABLE `games-platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games-shopping_carts`
--

DROP TABLE IF EXISTS `games-shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games-shopping_carts` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_games` int(100) unsigned NOT NULL,
  `id_shopping_cart` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_games` (`id_games`),
  KEY `id_shopping_cart` (`id_shopping_cart`),
  CONSTRAINT `games-shopping_carts_ibfk_1` FOREIGN KEY (`id_games`) REFERENCES `games` (`id`),
  CONSTRAINT `games-shopping_carts_ibfk_2` FOREIGN KEY (`id_shopping_cart`) REFERENCES `shopping_carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games-shopping_carts`
--

LOCK TABLES `games-shopping_carts` WRITE;
/*!40000 ALTER TABLE `games-shopping_carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `games-shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games-transactions`
--

DROP TABLE IF EXISTS `games-transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games-transactions` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(100) unsigned NOT NULL,
  `id_transaction` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_transaction` (`id_transaction`),
  CONSTRAINT `games-transactions_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games-transactions_ibfk_2` FOREIGN KEY (`id_transaction`) REFERENCES `transactions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games-transactions`
--

LOCK TABLES `games-transactions` WRITE;
/*!40000 ALTER TABLE `games-transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `games-transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_categories`
--

DROP TABLE IF EXISTS `games_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games_categories` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(10) unsigned NOT NULL,
  `id_categorie` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_categorie` (`id_categorie`),
  CONSTRAINT `games_categories_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games_categories_ibfk_2` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_categories`
--

LOCK TABLES `games_categories` WRITE;
/*!40000 ALTER TABLE `games_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `games_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_genres`
--

DROP TABLE IF EXISTS `games_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games_genres` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(100) unsigned NOT NULL,
  `id_genre` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_genre` (`id_genre`),
  CONSTRAINT `games_genres_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games_genres_ibfk_2` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_genres`
--

LOCK TABLES `games_genres` WRITE;
/*!40000 ALTER TABLE `games_genres` DISABLE KEYS */;
/*!40000 ALTER TABLE `games_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_platforms`
--

DROP TABLE IF EXISTS `games_platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games_platforms` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(100) unsigned DEFAULT NULL,
  `id_platform` int(100) unsigned DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_platform` (`id_platform`),
  CONSTRAINT `games_platforms_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games_platforms_ibfk_2` FOREIGN KEY (`id_platform`) REFERENCES `platforms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_platforms`
--

LOCK TABLES `games_platforms` WRITE;
/*!40000 ALTER TABLE `games_platforms` DISABLE KEYS */;
/*!40000 ALTER TABLE `games_platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_transactions`
--

DROP TABLE IF EXISTS `games_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games_transactions` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(100) unsigned NOT NULL,
  `id_transaction` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_transaction` (`id_transaction`),
  CONSTRAINT `games_transactions_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games_transactions_ibfk_2` FOREIGN KEY (`id_transaction`) REFERENCES `transactions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_transactions`
--

LOCK TABLES `games_transactions` WRITE;
/*!40000 ALTER TABLE `games_transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `games_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games_users`
--

DROP TABLE IF EXISTS `games_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games_users` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_game` int(100) unsigned NOT NULL,
  `id_user` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_game` (`id_game`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `games_users_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`),
  CONSTRAINT `games_users_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games_users`
--

LOCK TABLES `games_users` WRITE;
/*!40000 ALTER TABLE `games_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `games_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'First Person','2020-08-12 16:58:43','2020-08-12 16:58:43'),(2,'MMO','2020-08-12 16:58:54','2020-08-12 16:58:54'),(3,'Action','2020-08-12 16:59:40','2020-08-12 16:59:40'),(4,'Adventure','2020-08-12 16:59:49','2020-08-12 16:59:49'),(5,'Roleplay','2020-08-12 17:00:30','2020-08-12 17:00:30'),(6,'Shooter','2020-08-12 17:01:53','2020-08-12 17:01:53'),(7,'Survival','2020-08-12 17:02:23','2020-08-12 17:02:23'),(8,'Horror','2020-08-12 17:02:32','2020-08-12 17:02:32'),(9,'Sports','2020-08-12 17:03:15','2020-08-12 17:03:15'),(10,'Racing','2020-08-12 17:03:47','2020-08-12 17:03:47'),(11,'Third person','2020-08-12 17:04:43','2020-08-12 17:04:43'),(12,'Indie','2020-08-12 17:04:59','2020-08-12 17:04:59'),(13,'MOBA','2020-08-12 17:05:53','2020-08-12 17:05:53'),(14,'Sandbox','2020-08-12 17:06:06','2020-08-12 17:06:06');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(100) NOT NULL,
  `img_url` varchar(200) DEFAULT NULL,
  `id_game` int(100) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `img_url` (`img_url`),
  KEY `id_game` (`id_game`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`id_game`) REFERENCES `games` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(100) unsigned NOT NULL,
  `message` varchar(500) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `platforms`
--

DROP TABLE IF EXISTS `platforms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `platforms` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `platforms`
--

LOCK TABLES `platforms` WRITE;
/*!40000 ALTER TABLE `platforms` DISABLE KEYS */;
/*!40000 ALTER TABLE `platforms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('001-games_table.js'),('002-categories_table.js'),('003-genres_table.js'),('004-platforms_table.js'),('006-users_table.js'),('007-message_table.js'),('008-games-categories_table.js'),('009-games-genres_table.js'),('010-games-platforms_table.js'),('011-games_users_table.js'),('012-images.js'),('013-messages_table.js'),('014-user_sales_table.js'),('015-user_purchases_table.js'),('016-transactions_table.js'),('017-games_transactions_table.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shopping_carts` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `total_cost` int(10) NOT NULL,
  `quantity` int(1) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
INSERT INTO `shopping_carts` VALUES (1,676,1,'2020-08-12 19:14:21','2020-08-12 19:14:21');
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `total_cost` int(100) NOT NULL,
  `status` varchar(10) NOT NULL,
  `quantity` int(100) NOT NULL,
  `payment` varchar(50) NOT NULL,
  `id_user` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_purchases`
--

DROP TABLE IF EXISTS `user_purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_purchases` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_buyer_user` int(100) unsigned NOT NULL,
  `id_sale` int(100) unsigned NOT NULL,
  `status_transaction` varchar(500) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_buyer_user` (`id_buyer_user`),
  KEY `id_sale` (`id_sale`),
  CONSTRAINT `user_purchases_ibfk_1` FOREIGN KEY (`id_buyer_user`) REFERENCES `users` (`id`),
  CONSTRAINT `user_purchases_ibfk_2` FOREIGN KEY (`id_sale`) REFERENCES `user_sales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_purchases`
--

LOCK TABLES `user_purchases` WRITE;
/*!40000 ALTER TABLE `user_purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_sales`
--

DROP TABLE IF EXISTS `user_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_sales` (
  `id` int(100) unsigned NOT NULL AUTO_INCREMENT,
  `id_juego` int(100) unsigned NOT NULL,
  `id_seller_user` int(100) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_juego` (`id_juego`),
  KEY `id_seller_user` (`id_seller_user`),
  CONSTRAINT `user_sales_ibfk_1` FOREIGN KEY (`id_juego`) REFERENCES `games` (`id`),
  CONSTRAINT `user_sales_ibfk_2` FOREIGN KEY (`id_seller_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_sales`
--

LOCK TABLES `user_sales` WRITE;
/*!40000 ALTER TABLE `user_sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(60) NOT NULL,
  `last_name` varchar(60) NOT NULL,
  `username` varchar(25) NOT NULL,
  `email` varchar(75) NOT NULL,
  `password` varchar(100) NOT NULL,
  `gender` char(15) DEFAULT 'Unspecified',
  `birth_date` datetime DEFAULT NULL,
  `address` varchar(100) DEFAULT 'Unspecified',
  `avatar` varchar(100) DEFAULT '/image/defaultAvatar',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-13  1:43:19
