DROP DATABASE IF EXISTS sportsbetting;

CREATE DATABASE sportsbetting;

USE sportsbetting;

CREATE TABLE teams (
  id int NOT NULL AUTO_INCREMENT,
  team varchar(25) NOT NULL,
  abbreviation varchar(25) NOT NULL,
  conference varchar(25) NOT NULL,
  division varchar(25) NOT NULL,
  PRIMARY KEY (ID)
);


LOAD DATA LOCAL INFILE '/Users/christophersorta/hrsf130-mvp-starter/nfl_teams.csv'
INTO TABLE teams
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
