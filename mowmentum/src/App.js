import React, { Component } from 'react';
import axios from 'axios'
import User from "./components/user"
import Location from "./components/location"
import Bored from './components/bored'
import './App.css';

class App extends Component {
  state = {
    user: '',
    location: '',
    bored: ''
  }

  componentDidMount() {
    axios.get(`http://boredapi.com/api/activity/?type=recreational`).then(res => {
      this.setState({bored: res.data})
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
