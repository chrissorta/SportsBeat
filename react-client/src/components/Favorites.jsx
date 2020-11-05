import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


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
        <div> You have won the most bets on {this.state.favoriteBets.fav_pick_win_team} at {this.state.favoriteBets.fav_pick_team_wins} wins</div>

    <div> You have lost the most bets on: {this.state.favoriteBets.fav_pick_loss_team} at {this.state.favoriteBets.fav_pick_team_losses} losses</div>
        <div> You have the most success betting against: {this.state.favoriteBets.pick_against_team_wins} </div>
        <div> You usually lose when you bet against:   {this.state.favoriteBets.pick_against_team_losses}</div>
      </div>
    )
  }
}

export default Favorites;