import React from 'react';
import styled from 'styled-components';


const TrackNewBet  =styled.button`
  margin-bottom: 15px;
`

const SelectSpaced = styled.select`
  margin-left: 7px;
`
class NewBet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsOn: false,
      betType: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(e) {
    this.setState({ betType: e.target.value })
  }


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
          <div>

          </div>

        }
      </div>


    )
  }
}

export default NewBet;