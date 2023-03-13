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