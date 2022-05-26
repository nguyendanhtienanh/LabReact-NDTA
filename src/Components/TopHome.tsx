import React from "react";
import './TopHome.css';
import { Row, Col, Container } from "reactstrap";
import Logo1 from '../img/Logo1.png';
import logouser from '../img/logo_user.png';
import { Link } from "react-router-dom";

const TopHome: React.FC = () => {
    return (
        <div className="TopHome">
            <Container>
                <Row>
                    <Col className="home_logo">
                        <Link to='/shop/'>
                            <img src={Logo1} className="logo-header"></img>
                        </Link>
                    </Col>
                    <Col className="home_text">
                        <p>Mobile Shopping</p>
                    </Col>
                    <Col className="logo_user">
                        <Link to='/user/' className="fix-logouser">
                            <img src={logouser}></img>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TopHome;