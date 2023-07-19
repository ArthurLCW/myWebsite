DROP DATABASE IF EXISTS mywebsite;
CREATE SCHEMA `mywebsite` ;
CREATE TABLE `mywebsite`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `postname` VARCHAR(45) NOT NULL,
  `comment` MEDIUMTEXT NOT NULL,
  `time` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE `mywebsite`.`users` (
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

USE mywebsite;
ALTER DATABASE mywebsite CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
ALTER TABLE comments CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

