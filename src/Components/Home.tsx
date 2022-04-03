import React from "react";
import './Home.css';
import TopHome from "./TopHome";
import Menu from "./Menu";
import { Routes, Route} from "react-router-dom";
import User from "../Page/User";
import Shop from "../Page/Shop";
import Cart from "../Page/Cart";

const Home: React.FC = () => {
        return (
            <div className="Home">
                <TopHome></TopHome>
                <div className="home-1">
                    <Menu></Menu>
                    <Routes>
                        <Route path="Shop" element={<Shop />} />
                        <Route path="Cart" element={<Cart />} />
                        <Route path="User" element={<User />} />
                    </Routes>
                </div>
            </div>
        );
}

export default Home;