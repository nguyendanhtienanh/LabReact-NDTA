import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
