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

class ScoreBet extends React.Component {
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
    let team1 = e.target.elements.team1.value;
    let team2 = e.target.elements.team2.value;
    let result = e.target.elements.result.value
    let pointTotal = e.target.elements.pointTotal.value;
    let odds = e.target.elements.odds.value;
    let wagered = e.target.elements.amount.value;

    axios.post('/scoreBet', {
      username,week, team1, team2, result, pointTotal, odds, wagered
    })
      .then(() => {
        this.props.onSubmitClick();
      })
      .catch( () => {
        alert('Please properly fill out all fields before submitting');
      })
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
              Team 1:
               <SelectSpaced name="team1" id="team1">
            {this.props.teams.map((team) =>
              <option value={team.name}>{team.name}</option>
            )}
          </SelectSpaced> <br />
              Team 2:
              <SelectSpaced name="team2" id="team2">
            {this.props.teams.map((team) =>
              <option value={team.name}>{team.name}</option>
            )}
          </SelectSpaced> <br />
                Over / Under ?
                <StyledInput  type="text" name="pointTotal"></StyledInput> <br />

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

export default ScoreBet;