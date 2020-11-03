import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TeamBet from './TeamBet.jsx';
import ScoreBet from './ScoreBet.jsx';

const TrackNewBet = styled.button`
  margin-bottom: 15px;
`

const SelectSpaced = styled.select`
  margin-left: 7px;
  margin-bottom: 10px;
`

const StyledInput = styled.input `
margin-left: 7px;
margin-bottom: 10px;
`

class NewBet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      optionsOn: false,
      betType: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);

  }

  componentDidMount() {
    axios.get('/teams')
      .then((teams) => {

        this.setState({ teams: teams.data })
      }
      )
  }



  handleChange(e) {
    this.setState({ betType: e.target.value })
  }

  onSubmitClick() {
    this.setState({ optionsOn: !this.state.optionsOn, betType: '' });

  };

  render() {

    return (
      <div>

        <div >
          <TrackNewBet onClick={() => {
            this.setState({ optionsOn: !this.state.optionsOn });
          }}>
            Track a New Bet
      </TrackNewBet>
        </div >
        <div>
          {this.state.optionsOn &&
            <div>
              Choose a bet:
       <SelectSpaced value={this.state.betType} onChange={this.handleChange} name="bets" id="bets">
                <option value=""></option>
                <option value="spread">Spread</option>
                <option value="o/u">O/U</option>
                <option value="ml">Money Line</option>
              </SelectSpaced>
            </div>
          }
        </div>
        {
          this.state.betType === 'spread' &&
          <TeamBet onSubmitClick={ this.onSubmitClick} spread={true}teams={this.state.teams} username={this.props.username}/>
        }
        {
          this.state.betType === 'ml' &&
          <TeamBet onSubmitClick={this.onSubmitClick}spread={false} teams={this.state.teams} username={this.props.username}/>

        }
        {
          this.state.betType === 'o/u' &&
          <ScoreBet onSubmitClick={this.onSubmitClick} teams={this.state.teams} username={this.props.username}/>
        }
      </div>


    )
  }
}

export default NewBet;