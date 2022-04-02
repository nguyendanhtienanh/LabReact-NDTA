import React from 'react';
import Login from './Components/Login';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import './App.css';

const App: React.FC = () => {

    return(
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Home />} />
        </Routes>
      </div>
    );
  }

export default App;
