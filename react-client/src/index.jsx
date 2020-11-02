import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Intro from './components/Intro.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      page: 0
    }

    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {

  }

  setUser(username) {
    this.setState({username, page: 1});
  }



  render() {
    if(this.state.page === 0) {

      return (<Intro setUser={this.setUser}/>)
    } else if(this.state.page === 1) {
      return (
      <div>Betting Dashboard</div>
      )
    }

  }
}

ReactDOM.render(<App />, document.getElementById('app'));