var mysql = require('mysql');
let helpers = require('./helpers/oddsCalculator.js');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sportsbetting'
});

var selectTeams = function (callback) {
  connection.query('SELECT * FROM teams', function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};



var postTeamBet = function (stats, callback) {

  let query = "INSERT into teamBets(username, week, team1, team2, spread, result, odds, wagered, accountChange)  VALUES(?,?,?,?,?,?,?,?,?)";

  accountChange = helpers.oddsCalculation(stats.result, stats.odds, stats.wagered);

  let values = [stats.username, stats.week, stats.team1, stats.team2, stats.spread, stats.result, stats.odds, stats.wagered, accountChange];
  connection.query(query, values, (err, results) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  }
  )

}

var grabOverall = function (username, callback) {
    let query = `select ( select count(*) from teambets where username = '${username}' AND spread like '%N/A%' AND result = 'won') AS total_ml_won,( select count(*) from teambets where username = '${username}' AND spread like '%N/A%' AND result = 'lost') AS total_ml_lost, ( select count(*) from teambets where username = '${username}' AND spread NOT LIKE '%N/A%' AND result = 'won') AS total_spread_won, ( select count(*) from teambets where username = '${username}' AND spread NOT LIKE '%N/A%' AND result = 'lost') AS total_spread_lost, ( select count(*) from scorebets where username = '${username}' AND result = 'won') AS total_over_under_won, ( select count(*) from scorebets where username = '${username}' AND result = 'lost') AS total_over_under_lost, ((select COALESCE(sum(accountChange),0) from scorebets where username = '${username}') + (select COALESCE(sum(accountChange),0) from teambets where username = '${username}')) AS total_account;`;


  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  }
  )
}

var grabFavorites = function (username, callback) {
    let query = `select (select team1 from teambets where username = '${username}' and result='won' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_win_team, (select count(*) from teambets where username = '${username}' and result='won' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_team_wins, (select team1 from teambets where username = '${username}' and result='lost' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_loss_team, (select count(*) from teambets where username = '${username}' and result='lost' GROUP BY team1 order by count(*) desc LIMIT 1) AS fav_pick_team_losses, (select team2 from teambets where username = '${username}' and result='lost' GROUP BY team2 order by count(*) desc LIMIT 1) AS pick_against_team_losses, (select team2 from teambets where username = '${username}' and result='won' GROUP BY team2 order by count(*) desc LIMIT 1) AS pick_against_team_wins`;


  connection.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  }
  )
}



var postScoreBet = function (stats, callback) {

  let query = "INSERT into scoreBets(username, week, team1, team2, pointTotal, result, odds, wagered, accountChange)  VALUES(?,?,?,?,?,?,?,?,?)";

  accountChange = helpers.oddsCalculation(stats.result, stats.odds, stats.wagered);

  let values = [stats.username, stats.week, stats.team1, stats.team2, stats.pointTotal, stats.result, stats.odds, stats.wagered, accountChange];
  connection.query(query, values, (err, results) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  }
  )

}


module.exports.grabOverall = grabOverall;
module.exports.grabFavorites = grabFavorites;
module.exports.selectTeams = selectTeams;
module.exports.postTeamBet = postTeamBet;
module.exports.postScoreBet = postScoreBet;


