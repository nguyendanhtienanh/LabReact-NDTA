import React from "react";
import './Home.css';
import TopHome from "./TopHome";
import Menu from "./Menu";


const Home: React.FC = () => {
        return (
            <div className="Home">
                <TopHome></TopHome>
                <div className="home-1">
                    <Menu></Menu>
                </div>
            </div>
        );
}

export default Home;