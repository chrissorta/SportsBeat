var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'sportsbetting'
});

var selectTeams = function(callback) {
  connection.query('SELECT * FROM teams', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectTeams = selectTeams;
