import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SelectSpaced = styled.select`
  margin-left: 7px;
  margin-bottom: 10px;
`

const StyledInput = styled.input`
margin-left: 7px;
margin-bottom: 10px;
`

class TeamBet extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    e.preventDefault();
    let username = this.props.username;
    let week = e.target.elements.week.value;
    let team1 = e.target.elements.teamFor.value;
    let team2 = e.target.elements.teamAgainst.value;
    let result = e.target.elements.result.value
    let spread;
    if(e.target.elements.spread === undefined) {
      spread = 'N/A';
    } else {
      spread = e.target.elements.spread.value
    }
    let odds = e.target.elements.odds.value;
    let wagered = e.target.elements.amount.value;

    axios.post('/teamBet', {
      username,week, team1, team2, result, spread, odds, wagered
    })
      .then(() => {
        this.props.onSubmitClick();
  })
      .catch()
  };

  render() {

    return (

      <div>
        <form onSubmit={(e) => this.onButtonClick(e)}>
          Betting Information <br />
              NFL Week:
              <SelectSpaced name="week" id="week">
            {[...Array(17).keys()].map((value, i) =>
              <option value={value + 1}>{value + 1}</option>
            )}
          </SelectSpaced> <br />
              Team bet on:
               <SelectSpaced name="teamFor" id="teamFor">
            {this.props.teams.map((team) =>
              <option value={team.name}>{team.name}</option>
            )}
          </SelectSpaced> <br />
              Team bet against:
              <SelectSpaced name="teamAgainst" id="teamAgainst">
            {this.props.teams.map((team) =>
              <option value={team.name}>{team.name}</option>
            )}
          </SelectSpaced> <br />
          { this.props.spread &&
              <div>
                Spread
                <StyledInput type="text" name="spread"></StyledInput> <br />
              </div>

          }
              Won or Lost<SelectSpaced name="result" id="result">
            <option value="Won">Won</option>
            <option value="Lost">Lost</option>
          </SelectSpaced> <br />
              Odds on the Bet<StyledInput type="text" name="odds"></StyledInput> <br />
              Amount wagered<StyledInput type="text" name="amount"></StyledInput> <br />
          <button type="submit" >Submit</button>
        </form>

      </div>

    )
  }
}

export default TeamBet;