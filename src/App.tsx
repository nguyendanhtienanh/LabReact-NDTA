import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Login></Login>
      </div>
    );
  }
}

export default App;
