import React, { useState } from "react";
import './Menu.css';
import { Navbar, Collapse, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand,  } from "reactstrap";
import logoshop from '../img/logoshop.png';
import logocart from '../img/logocart.png';
import logouser from '../img/logouser.png';

const Menu: React.FC = () => {
    
    const [sidebar, setSidebar] = useState(false);
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
                                    <NavLink href="/components/">
                                        Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cart">
                                    <img src={logocart}></img>
                                    <NavLink href="/components/">
                                        Cart
                                    </NavLink>
                                </NavItem>
                                <NavItem className="user">
                                    <img src={logouser}></img>
                                    <NavLink href="/components/">
                                        My Profile
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