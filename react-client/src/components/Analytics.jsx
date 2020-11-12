import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Overall from './Overall.jsx';
import Favorites from './Favorites.jsx';


const AnalyticsDiv = styled.div`
  // border: 0px solid #fff;
  background-color: olive;
  padding-bottom: 15px;
  border-radius: 15px;
`;

const AnalyticsChildDiv = styled.div`
  width: 50%;
  margin: 0px;
  float: left;
  background-color: beige;
  border-radius: 4px;
`;

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <AnalyticsDiv>

        <h1>
          Analytics Dashboard
        </h1>
          <AnalyticsChildDiv>
            <h4>Overall:</h4>
            <Overall username={this.props.username} />
          </AnalyticsChildDiv>
          <AnalyticsChildDiv>
            <h4>Favorites:</h4>
            <Favorites username={this.props.username} />

          </AnalyticsChildDiv>
        </AnalyticsDiv>
    )
  }
}

export default Analytics;