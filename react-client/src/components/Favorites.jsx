import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StatDiv = styled.div`
  padding-bottom: 7px;

  &:last-of-type {
    padding-bottom: 25px;
  }
`;

const StatSpan = styled.span`
    color: ${props => props.stat === 'good' ? 'green' : 'red'};
`;


class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteBets: {}

    };

    this.retrieveBets = this.retrieveBets.bind(this);
  }


  retrieveBets() {
    axios.get('/api/stats/favorites', { params: { username: this.props.username } })
      .then((res) => {
        this.setState({ favoriteBets: res.data[0] })
      })
      .catch()

  }
  componentDidMount() {
    this.retrieveBets();
  }

  componentDidUpdate() {
    this.retrieveBets();
  }

  render() {
    return (
      <div>
        <StatDiv> You have won the most bets on: <StatSpan stat={'good'}>{this.state.favoriteBets.fav_pick_win_team} at {this.state.favoriteBets.fav_pick_team_wins} wins</StatSpan></StatDiv>

    <StatDiv> You have lost the most bets on: <StatSpan stat={'bad'}>{this.state.favoriteBets.fav_pick_loss_team} at {this.state.favoriteBets.fav_pick_team_losses} losses</StatSpan></StatDiv>
        <StatDiv> You have the most success betting against: <StatSpan stat={'good'}>{this.state.favoriteBets.pick_against_team_wins} </StatSpan></StatDiv>
        <StatDiv> You usually lose when you bet against: <StatSpan stat={'bad'}>  {this.state.favoriteBets.pick_against_team_losses}</StatSpan></StatDiv>
      </div>
    )
  }
}

export default Favorites;