import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Intro from './components/Intro.jsx';
import Dashboard from './components/Dashboard.jsx';
import styled from 'styled-components';


const HeadDiv = styled.div`
  font-family: Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'test',
      page: 1
    }

    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {

  }

  setUser(username) {
    this.setState({ username, page: 1 });
  }



  render() {
    if (this.state.page === 0) {

      return (
        <HeadDiv>
          <Intro setUser={this.setUser} />
        </HeadDiv>
      )
    } else if (this.state.page === 1) {
      return (
        <HeadDiv>
          <Dashboard username={this.state.username} />
        </HeadDiv>
      )
    }

  }
}

ReactDOM.render(<App />, document.getElementById('app'));