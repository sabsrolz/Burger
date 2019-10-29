-- Drops the friends_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "friends_db" database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INTEGER NOT NULL AUTO_INCREMENT, 
burger_name VARCHAR(100) NOT NULL, 
devoured BOOLEAN NOT NULL DEFAULT 0,
PRIMARY KEY (id)
);

SELECT * FROM burgers;