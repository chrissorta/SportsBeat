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




select ( select count(*) from teambets where username = 'test' AND spread like '%N/A%' AND result = 'won') AS total_ml_won,( select count(*) from teambets where username = 'test' AND spread like '%N/A%' AND result = 'lost') AS total_ml_lost, ( select count(*) from teambets where username = 'test' AND spread NOT LIKE '%N/A%' AND result = 'won') AS total_spread_won, ( select count(*) from teambets where username = 'test' AND spread NOT LIKE '%N/A%' AND result = 'lost') AS total_spread_lost, ( select count(*) from scorebets where username = 'test' AND result = 'won') AS total_over_under_won, ( select count(*) from scorebets where username = 'test' AND result = 'lost') AS total_over_under_lost



select (select team1 from teambets where username = 'test' and result='won' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_win_team, (select count(*) from teambets where username = 'test' and result='won' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_team_wins, (select team1 from teambets where username = 'test' and result='lost' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_loss_team, (select count(*) from teambets where username = 'test' and result='lost' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_team_losses, (select team2 from teambets where username = 'test' and result='lost' GROUP BY team2 order by count(*) desc LIMIT 1) AS pick_against_team_losses, (select team2 from teambets where username = 'test' and result='won' GROUP BY team2 order by count(*) desc LIMIT 1) AS pick_against_team_wins ;


