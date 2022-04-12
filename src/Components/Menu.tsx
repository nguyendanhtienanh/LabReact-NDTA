import React, { useState } from "react";
import './Menu.css';
import { Navbar, Collapse, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand,  } from "reactstrap";
import logoshop from '../img/logoshop.png';
import logocart from '../img/logocart.png';
import logouser from '../img/logouser.png';
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
    
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className="Menu">
            <div>
                <Navbar
                    color="faded"
                    light
                >
                    <div className="header-menu">
                        <NavbarBrand
                            className="me-auto"
                        >
                            Menu
                        </NavbarBrand>
                        <NavbarToggler
                            className="me-2"
                            onClick={showSidebar}
                        />
                    </div>
                    <div className="content-menu">
                        <Collapse isOpen={sidebar} navbar>
                            <Nav navbar>
                                <NavItem className="shop"> 
                                    <img src={logoshop}></img>
                                    <NavLink>
                                        <Link to='/shop/' className="hover">
                                            Shop
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cart">
                                    <img src={logocart}></img>
                                    <NavLink>
                                        <Link to='/cart/' className="hover">
                                            Cart
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="user">
                                    <img src={logouser}></img>
                                    <NavLink>
                                        <Link to='/Products/' className="hover">
                                            My Profile
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>    
                </Navbar>
            </div>
        </div>
    );
}

export default Menu;