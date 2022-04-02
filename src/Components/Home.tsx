import React, { useState } from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Navbar, Collapse, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap'
import TopHome from "./TopHome";
import Menu from "./Menu";

import { Link } from "react-router-dom";
 
const Home: React.FC = () => {
        return (
            <div className="Home">
                <TopHome></TopHome>
                <Menu></Menu>
                <nav>
                    <Link to="/">
                        Login
                    </Link>
                </nav>
            </div>
        );
}

export default Home;