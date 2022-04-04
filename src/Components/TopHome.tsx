import React from "react";
import './TopHome.css';
import { Row, Col } from "reactstrap";
import Logo1 from '../img/Logo1.png';
import logouser from '../img/logo_user.png';
import { Link } from "react-router-dom";

const TopHome: React.FC = () => {
    return (
        <div className="TopHome">
                <Row>
                    <Col sm={1} className="home_logo">
                        <Link to='/shop/'>
                            <img src={Logo1}></img>
                        </Link>
                    </Col>
                    <Col sm={10} className="home_text">
                        <p>Mobile Shopping</p>
                    </Col>
                    <Col sm={1} className="logo_user">
                        <Link to='/user/' className="fix-logouser">
                            <img src={logouser}></img>
                        </Link>
                    </Col>
                </Row>
        </div>
    );
}

export default TopHome;