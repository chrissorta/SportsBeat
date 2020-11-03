DROP DATABASE IF EXISTS sportsbetting;

CREATE DATABASE sportsbetting;

USE sportsbetting;

CREATE TABLE teams (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(25) NOT NULL,
  abbreviation varchar(25) NOT NULL,
  conference varchar(25) NOT NULL,
  division varchar(25) NOT NULL,
  PRIMARY KEY (ID)
);

create table teamBets (

  id int NOT NULL AUTO_INCREMENT,
  username varchar(50),
  week int NOT NULL,
  team1 varchar(25) NOT NULL,
  team2 varchar(25) NOT NULL,
  spread varchar(10) NOT NULL,
  result varchar(5) NOT NULL,
  odds varchar(10) NOT NULL,
  wagered int NOT NULL,
  accountChange int NOT NULL,
  PRIMARY KEY (ID)

);

create table scoreBets (

  id int NOT NULL AUTO_INCREMENT,
  username varchar(50),
  week int NOT NULL,
  team1 varchar(25) NOT NULL,
  team2 varchar(25) NOT NULL,
  pointTotal varchar(10) NOT NULL,
  result varchar(5) NOT NULL,
  odds varchar(10) NOT NULL,
  wagered int NOT NULL,
  accountChange int NOT NULL,
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
