-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: plants_bd
-- ------------------------------------------------------
-- Server version	5.7.31-0ubuntu0.18.04.1

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
-- Table structure for table `chat_messages`
--

DROP TABLE IF EXISTS `chat_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `message` varchar(500) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `chat_messages_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_compound_and_plant`
--

DROP TABLE IF EXISTS `combo_compound_and_plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_compound_and_plant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) NOT NULL,
  `id_compound` int(11) NOT NULL,
  `percentage` int(100) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_compound` (`id_compound`),
  KEY `id_plant` (`id_plant`),
  CONSTRAINT `combo_compound_and_plant_ibfk_1` FOREIGN KEY (`id_compound`) REFERENCES `compound` (`id`),
  CONSTRAINT `combo_compound_and_plant_ibfk_2` FOREIGN KEY (`id_plant`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_environment_and_plant`
--

DROP TABLE IF EXISTS `combo_environment_and_plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_environment_and_plant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) NOT NULL,
  `id_environment` int(11) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_environment` (`id_environment`),
  KEY `id_plant` (`id_plant`),
  CONSTRAINT `combo_environment_and_plant_ibfk_1` FOREIGN KEY (`id_environment`) REFERENCES `environment` (`id`),
  CONSTRAINT `combo_environment_and_plant_ibfk_2` FOREIGN KEY (`id_plant`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_group_and_permission`
--

DROP TABLE IF EXISTS `combo_group_and_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_group_and_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_group` int(11) DEFAULT NULL,
  `id_permission` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_group` (`id_group`),
  KEY `id_permission` (`id_permission`),
  CONSTRAINT `combo_group_and_permission_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`),
  CONSTRAINT `combo_group_and_permission_ibfk_2` FOREIGN KEY (`id_permission`) REFERENCES `permissions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_image_and_plant`
--

DROP TABLE IF EXISTS `combo_image_and_plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_image_and_plant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) NOT NULL,
  `id_image` int(11) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_image` (`id_image`),
  KEY `id_plant` (`id_plant`),
  CONSTRAINT `combo_image_and_plant_ibfk_1` FOREIGN KEY (`id_image`) REFERENCES `image` (`id`),
  CONSTRAINT `combo_image_and_plant_ibfk_2` FOREIGN KEY (`id_plant`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_image_and_specimen`
--

DROP TABLE IF EXISTS `combo_image_and_specimen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_image_and_specimen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_specimen` int(11) NOT NULL,
  `id_image` int(11) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_image` (`id_image`),
  KEY `id_specimen` (`id_specimen`),
  CONSTRAINT `combo_image_and_specimen_ibfk_1` FOREIGN KEY (`id_image`) REFERENCES `image` (`id`),
  CONSTRAINT `combo_image_and_specimen_ibfk_2` FOREIGN KEY (`id_specimen`) REFERENCES `specimen` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_localization_and_plant`
--

DROP TABLE IF EXISTS `combo_localization_and_plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_localization_and_plant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) NOT NULL,
  `id_localization` int(11) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_localization` (`id_localization`),
  KEY `id_plant` (`id_plant`),
  CONSTRAINT `combo_localization_and_plant_ibfk_1` FOREIGN KEY (`id_localization`) REFERENCES `localization` (`id`),
  CONSTRAINT `combo_localization_and_plant_ibfk_2` FOREIGN KEY (`id_plant`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_trait_and_plant`
--

DROP TABLE IF EXISTS `combo_trait_and_plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_trait_and_plant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) NOT NULL,
  `id_trait` int(11) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_trait` (`id_trait`),
  KEY `id_plant` (`id_plant`),
  CONSTRAINT `combo_trait_and_plant_ibfk_1` FOREIGN KEY (`id_trait`) REFERENCES `trait` (`id`),
  CONSTRAINT `combo_trait_and_plant_ibfk_2` FOREIGN KEY (`id_plant`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_trait_and_specimen`
--

DROP TABLE IF EXISTS `combo_trait_and_specimen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_trait_and_specimen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_specimen` int(11) NOT NULL,
  `id_trait` int(11) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_trait` (`id_trait`),
  KEY `id_specimen` (`id_specimen`),
  CONSTRAINT `combo_trait_and_specimen_ibfk_1` FOREIGN KEY (`id_trait`) REFERENCES `trait` (`id`),
  CONSTRAINT `combo_trait_and_specimen_ibfk_2` FOREIGN KEY (`id_specimen`) REFERENCES `specimen` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_usage_and_plant`
--

DROP TABLE IF EXISTS `combo_usage_and_plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_usage_and_plant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) NOT NULL,
  `id_usage` int(11) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_usage` (`id_usage`),
  KEY `id_plant` (`id_plant`),
  CONSTRAINT `combo_usage_and_plant_ibfk_1` FOREIGN KEY (`id_usage`) REFERENCES `usages` (`id`),
  CONSTRAINT `combo_usage_and_plant_ibfk_2` FOREIGN KEY (`id_plant`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_user_and_group`
--

DROP TABLE IF EXISTS `combo_user_and_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_user_and_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_group` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_group` (`id_group`),
  CONSTRAINT `combo_user_and_group_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `combo_user_and_group_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `combo_user_and_permission`
--

DROP TABLE IF EXISTS `combo_user_and_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `combo_user_and_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_permission` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_permission` (`id_permission`),
  CONSTRAINT `combo_user_and_permission_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `combo_user_and_permission_ibfk_2` FOREIGN KEY (`id_permission`) REFERENCES `permissions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `compound`
--

DROP TABLE IF EXISTS `compound`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compound` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `referencia` varchar(500) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `configuration`
--

DROP TABLE IF EXISTS `configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `configuration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `aspect` varchar(600) NOT NULL,
  `value` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `one_aspect_por_user` (`id_user`,`aspect`),
  CONSTRAINT `configuration_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `environment`
--

DROP TABLE IF EXISTS `environment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `environment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `example_process`
--

DROP TABLE IF EXISTS `example_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `example_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_creator` int(11) DEFAULT NULL,
  `data` text,
  `meta` text,
  `transactions` int(11) DEFAULT '1',
  `status` enum('started','continued','outdated') DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_creator` (`id_creator`),
  CONSTRAINT `example_process_ibfk_1` FOREIGN KEY (`id_creator`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `example_process_transaction`
--

DROP TABLE IF EXISTS `example_process_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `example_process_transaction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_process` int(11) DEFAULT NULL,
  `id_transactor` int(11) DEFAULT NULL,
  `operation` varchar(60) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_process` (`id_process`),
  KEY `id_transactor` (`id_transactor`),
  CONSTRAINT `example_process_transaction_ibfk_1` FOREIGN KEY (`id_process`) REFERENCES `example_process` (`id`),
  CONSTRAINT `example_process_transaction_ibfk_2` FOREIGN KEY (`id_transactor`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `filesystem`
--

DROP TABLE IF EXISTS `filesystem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `filesystem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nodetype` enum('branch','leaf') DEFAULT NULL,
  `path` varchar(200) NOT NULL,
  `contents` text,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `path` (`path`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `history_data`
--

DROP TABLE IF EXISTS `history_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `history_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_ip` varchar(40) DEFAULT NULL,
  `user_agent` varchar(120) DEFAULT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  `original_table` varchar(120) DEFAULT NULL,
  `request_data` text,
  `data` text,
  `metadata` text,
  `description` varchar(200) DEFAULT NULL,
  `deleted_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `history_event`
--

DROP TABLE IF EXISTS `history_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `history_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_ip` varchar(40) DEFAULT NULL,
  `user_agent` varchar(120) DEFAULT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  `original_table` varchar(120) DEFAULT NULL,
  `event` varchar(120) DEFAULT NULL,
  `data` text,
  `metadata` text,
  `description` varchar(200) DEFAULT NULL,
  `deleted_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_specimen` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `localization`
--

DROP TABLE IF EXISTS `localization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localization` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plant`
--

DROP TABLE IF EXISTS `plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `name_scientific` varchar(200) DEFAULT NULL,
  `name_popular` text,
  `description` text,
  `field_1` int(11) DEFAULT NULL,
  `field_2` int(11) DEFAULT NULL,
  `field_3` int(11) DEFAULT NULL,
  `field_4` int(11) DEFAULT NULL,
  `field_5` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_scientific` (`name_scientific`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `plant_details`
--

DROP TABLE IF EXISTS `plant_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plant_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_plant` (`id_plant`),
  CONSTRAINT `plant_details_ibfk_1` FOREIGN KEY (`id_plant`) REFERENCES `plant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `session_token` varchar(200) DEFAULT NULL,
  `refresh_token` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `session_token` (`session_token`),
  UNIQUE KEY `refresh_token` (`refresh_token`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `specimen`
--

DROP TABLE IF EXISTS `specimen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `specimen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_plant` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `specimen_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `trait`
--

DROP TABLE IF EXISTS `trait`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trait` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(1000) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `trait_details`
--

DROP TABLE IF EXISTS `trait_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trait_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_trait` int(11) DEFAULT NULL,
  `details` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `trait_secret_details`
--

DROP TABLE IF EXISTS `trait_secret_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trait_secret_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_trait` int(11) DEFAULT NULL,
  `details` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `unconfirmed_users`
--

DROP TABLE IF EXISTS `unconfirmed_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unconfirmed_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `full_name` varchar(400) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `confirmation_token` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `confirmation_token` (`confirmation_token`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `usages`
--

DROP TABLE IF EXISTS `usages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `full_name` varchar(400) NOT NULL,
  `email` varchar(300) NOT NULL,
  `recovery_token` varchar(400) DEFAULT NULL,
  `deactivation` tinyint(1) DEFAULT '0',
  `profile_picture` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-23 23:32:25
