import React from 'react';
// import ListItem from './ListItem.jsx';

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
      <div>
        <h1>Welcome to the NFL Sports Betting Tracker</h1>
        <h2>Type in your username below to access your account</h2>
        <form onSubmit={(e) => { this.submitUser(e) }}>
          <span>Username:   </span>
          <input type="text" value={this.state.value} onChange={(e) => { this.handleUser(e) }} ></input>
          <input type="submit"></input>
        </form>
        {/* <List items={this.state.teams} /> */}
      </div>
    )
  }
}

export default Intro;