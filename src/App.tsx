import React from 'react';
import Login from './Components/Login';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import './App.css';
import User from './Page/User';
import Cart from './Page/Cart';
import Shop from './Page/Shop';
import Products from './Page/Products';

const App: React.FC = () => {

    return(
        <div className='App'>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Home" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="User" element={<User />} />
          <Route path="Products" element={<Products />} />
        </Routes>
      </div>
    );
  }

export default App;
