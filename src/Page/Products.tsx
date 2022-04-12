import React, {useState} from "react";
import '../Page/Products.css';
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import { Link } from "react-router-dom";
import iconcart from '../img/shopping-cart.png';
import { Container, Row, Col, Card, Button, CardText, CardTitle, CardImg } from "reactstrap";
import data from "../Page/data";


const Products: React.FC = () => {

    return(
        <div className="Products">
            <TopHome></TopHome>
            <div className="body-Products">
                <Menu></Menu>
                <div className="content-Products">
                    <Container className="header-product">
                        <Row className="title-product-row">
                            <Col className="title-product-col">
                                SHOP
                            </Col>
                        </Row>
                        <Row className="header-product-row">
                            <Col sm={10} className='link-product-col'>
                                <Link to="/shop/" className="link">
                                    Shop  
                                </Link>
                                    / Product
                            </Col>
                            <Col sm={1} className="icon-cart">
                                <img src={iconcart}></img>
                                <span>0</span>
                            </Col>
                        </Row>
                    </Container>
                    <div className="data-shop">
                        <Container>
                            {data.productData.map((item) => {
                                return (
                                    <Row>
                                        <Col sm={4} className="img-product-data-row">
                                            <CardImg 
                                                className="img-product-data"
                                                src={item.img}
                                            ></CardImg>
                                        </Col>
                                        <Col sm={8} className="info-product-data-row">
                                            <CardTitle className="info-product-data-name">
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="info-product-data-description">
                                                {item.description}
                                            </CardText>
                                            <CardText className="info-product-data-price">
                                                {item.price}
                                            </CardText>
                                            <CardImg
                                                className="info-product-data-star"
                                                src={item.star}
                                            />
                                            <div className="info-product-data-button">
                                                <Link to='/cart'>
                                                    <Button className="button-buy">
                                                        Mua Ngay
                                                    </Button>
                                                </Link>
                                                <Button className="button-addtocart">
                                                    Thêm vào giỏ hàng
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col>
                                            <CardImg
                                                className="info-product-data-more"
                                                src={item.more}
                                            />
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;