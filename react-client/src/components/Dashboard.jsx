import React from 'react';
import styled from 'styled-components';
import NewBet from './NewBet.jsx';

const Main = styled.div`
  // position:relative;
  // float: middle;
  // display: block;
  width: 50%;
  margin: auto;
  text-align: center;
`
class Dashboard extends React.Component {
    constructor(props) {
      super(props);

    }


  render() {
    return (
      <Main>
        <h1>
          Betting Dashboard
       </h1>
       <NewBet username={this.props.username}/>
      </Main >
    )
  }
}

export default Dashboard;