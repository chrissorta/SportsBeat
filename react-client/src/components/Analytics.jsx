import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Overall from './Overall.jsx';
import Favorites from './Favorites.jsx';

class Analytics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {


    }

  }

componentDidMount() {

}

render() {
  return (
    <div>

  <h1>
    Analytics Dashboard
  </h1>
  <h4>Overall:</h4>
    <Overall username={this.props.username}/>
  <h4>Favorites:</h4>
    <Favorites username={this.props.username}/>
    </div>
  )
}
}

export default Analytics;