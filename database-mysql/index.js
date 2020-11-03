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

  accountChange = helpers.oddsCalculation(stats.result,stats.odds,stats.wagered);

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
var postScoreBet = function (stats, callback) {

  let query = "INSERT into scoreBets(username, week, team1, team2, pointTotal, result, odds, wagered, accountChange)  VALUES(?,?,?,?,?,?,?,?,?)";

  accountChange = helpers.oddsCalculation(stats.result,stats.odds,stats.wagered);

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

module.exports.selectTeams = selectTeams;
module.exports.postTeamBet = postTeamBet;
module.exports.postScoreBet = postScoreBet;
