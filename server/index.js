var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var bets = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/teams',  (req, res) => {
  bets.selectTeams((err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/teamBet', (req, res) => {
  bets.postTeamBet(req.body , (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })

})

app.post('/scoreBet', (req, res) => {
  bets.postScoreBet(req.body , (err, data) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })

})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

