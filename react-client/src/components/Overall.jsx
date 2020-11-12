import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StatDiv = styled.div`
  padding-bottom: 7px;
  color: ${props => props.win >= props.loss ? 'green' : 'red'};
  &:last-of-type {
    padding-bottom: 25px;
  }
`;


class Overall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overallBets: {}

    };

    this.retrieveBets = this.retrieveBets.bind(this);
  }


  retrieveBets() {
    axios.get('/api/stats/overall', { params: { username: this.props.username } })
      .then((res) => {
        this.setState({ overallBets: res.data[0] })
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
        <StatDiv win={this.state.overallBets.total_account} loss={this.state.overallBets.total_spread_lost}> Account status: ${this.state.overallBets.total_account}</StatDiv>


        <StatDiv win={this.state.overallBets.total_spread_won} loss={this.state.overallBets.total_spread_lost} > Overall record against the Spread: {this.state.overallBets.total_spread_won} - {this.state.overallBets.total_spread_lost}</StatDiv>

        <StatDiv win={this.state.overallBets.total_ml_won} loss={this.state.overallBets.total_ml_lost}> Overall record on the Money Line: {this.state.overallBets.total_ml_won} - {this.state.overallBets.total_ml_lost}</StatDiv>

        <StatDiv win={this.state.overallBets.total_over_under_won} loss={this.state.overallBets.total_over_under_lost}> Overall record on the Over / Under: {this.state.overallBets.total_over_under_won} - {this.state.overallBets.total_over_under_lost} </StatDiv>
      </div>
    )
  }
}

export default Overall;