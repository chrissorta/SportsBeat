import React from 'react';
import styled from 'styled-components';
import NewBet from './NewBet.jsx';
import Analytics from './Analytics';

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

      this.state = {
        updateTrigger: false
      }

      this.updateTotals = this.updateTotals.bind(this);
    }


    updateTotals() {
      this.setState({updateTrigger: !this.state.updateTrigger});
    }



  render() {
    return (
      <Main>
        <h1>
          Betting Dashboard
       </h1>
       <NewBet updateTotals={this.updateTotals} username={this.props.username}/>
       <Analytics  username={this.props.username}/>
      </Main >
    )
  }
}

export default Dashboard;