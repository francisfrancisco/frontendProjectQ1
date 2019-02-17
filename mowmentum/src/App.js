import React, { Component } from 'react';
import axios from 'axios'
import User from "./components/user"
import Location from "./components/location"
import Bored from './components/bored'
import './App.css';

class App extends Component {
  state = {
    user: '',
    location: ''
  }

  componentDidMount() {
    axios.get(``).then(res => {
      this.setState({: res.data})
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
