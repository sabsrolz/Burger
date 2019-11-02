-- Drops the friends_db if it exists currently --
DROP DATABASE IF EXISTS `kkvqx2vqb28lajwt`;

CREATE DATABASE `kkvqx2vqb28lajwt`;

USE `kkvqx2vqb28lajwt`;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL, 
burger_name VARCHAR(100) NOT NULL, 
devoured BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY (id)
);

SELECT * FROM burgers;