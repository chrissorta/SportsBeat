var bets = require('../database-mysql');


let nflTeams = [Arizona Cardinals,
  'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills','Carolina Panthers','Chicago Bears','Cincinnati Bengals','Cleveland Browns','Dallas Cowboys','Denver Broncos','Detroit Lions','Green Bay Packers','Houston Texans','Indianapolis Colts', 'Jacksonville Jaguars','Kansas City Chiefs','Minnesota Vikings','New England Patriots', 'New Orleans Saints', 'NY Giants', 'NY Jets','Las Vegas Raiders','Philadelphia Eagles','Pittsburgh Steelers','Los Angeles Chargers','San Francisco 49ers','Seattle Seahawks', 'Los Angeles Rams','Tampa Bay Buccaneers', 'Tennessee Titans','Washington Football Team'];

  let commonSpreads = ['-10.5','-10','-9.5','-7.5','-7','-6.5','-6', '-5.5', '-5','-4.5', '-4', '-3.5', '-3', '2.5', '-2', '-1.5', '+1.5','+2','+2.5', '+3', '+3.5', '+4', '+4.5', '+5', '+5.5', '+6', '+6.5', '+7', '+7.5', '+9.5', '+10.5' ];
let seedTeamBets = () => {

  let(i = 0; i < 100; i++) {
    let username = 'test';
    let week = 1 + Math.floor(Math.rand() * 7);
    let team1 = nflTeams[ Math.floor(Math.rand() * 31)];
    let team2 = nflTeams[Math.floor(Math.rand() * 31)];
    let spread = commonSpreads[Math.floor(Math.rand() * 30)]
  }

}



seedTeamBets();