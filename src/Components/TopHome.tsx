import React from "react";
import './TopHome.css';
import { Row, Col } from "reactstrap";
import Logo1 from '../img/Logo1.png';
import logouser from '../img/logo_user.png';

const TopHome: React.FC = () => {
    return (
        <div className="TopHome">
                <Row>
                    <Col sm={1} className="home_logo">
                        <img src={Logo1}></img>
                    </Col>
                    <Col sm={10} className="home_text">
                        <p>Mobile Shopping</p>
                    </Col>
                    <Col sm={0} className="logo_user">
                        <img src={logouser}></img>
                    </Col>
                </Row>
        </div>
    );
}

export default TopHome;