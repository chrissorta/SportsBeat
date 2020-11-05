import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


class Overall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overallBets: {}

    };

    this.retrieveBets = this.retrieveBets.bind(this);
  }


  retrieveBets() {
    axios.get('/api/stats/overall', { params: {username: this.props.username} })
      .then((res) => {
        this.setState({overallBets: res.data[0]})
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
        <div> Account status: ${this.state.overallBets.total_account}</div>
    <div> Overall record against the Spread: {this.state.overallBets.total_spread_won} - {this.state.overallBets.total_spread_lost}</div>
        <div> Overall record on the Money Line: {this.state.overallBets.total_ml_won} - {this.state.overallBets.total_ml_lost}</div>
        <div> Overall record on the Over / Under: {this.state.overallBets.total_over_under_won} - {this.state.overallBets.total_over_under_lost} </div>
      </div>
    )
  }
}

export default Overall;