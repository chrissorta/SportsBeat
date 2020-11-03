import React from 'react';
// import ListItem from './ListItem.jsx';
import styled from 'styled-components';


const Main = styled.div`
  // position:relative;
  // float: middle;
  // display: block;
  width: 50%;
  margin: auto;
  text-align: center;
`


class Intro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.submitUser = this.submitUser.bind(this);
    this.handleUser = this.handleUser.bind(this);
  }

  submitUser(e) {
    e.preventDefault();
    this.props.setUser(this.state.value);

  };

  handleUser(e) {
    e.preventDefault();
    this.setState({value: e.target.value})
  }

  render() {

    return (
      <Main>
        <h1>Welcome to the NFL Sports Betting Tracker</h1>
        <h2>Type in your username below to access your account</h2>
        <form onSubmit={(e) => { this.submitUser(e) }}>
          <span>Username:   </span>
          <input type="text" value={this.state.value} onChange={(e) => { this.handleUser(e) }} ></input>
          <input type="submit"></input>
        </form>
        {/* <List items={this.state.teams} /> */}
      </Main>
    )
  }
}

export default Intro;