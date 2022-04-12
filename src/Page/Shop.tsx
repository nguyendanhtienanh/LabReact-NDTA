import React from "react";
import '../Page/Shop.css';
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import { Input, Container, Row, Col, CardText, CardTitle, CardImg } from "reactstrap";
import iconsearch from '../img/iconsearch.png';
import iconfilter from '../img/iconfilter.png';
import { Link } from "react-router-dom";
import data from '../Page/data';

const Shop: React.FC = () => {


    return(
        <div className="Shop">
            <TopHome></TopHome>
            <div className="body-shop">
                <Menu></Menu>
                <div className="content-shop">
                    <Container className="header-shop">
                        <Row className="title-shop-row">
                            <Col className="title-shop-col">
                                SHOP
                            </Col>
                        </Row>
                        <Row className="header-shop-row">
                            <Col sm={6} className='link-shop-col'>
                                <Link to="/shop/" className="link">
                                    Shop
                                </Link>
                            </Col>
                            <Col sm={5} className='search-col'> 
                                <Input
                                    className="search-input"
                                    type="text"
                                    placeholder="Search ..."
                                />
                                <img src={iconsearch}></img>
                            </Col>
                            <Col sm={1} className='filter-col'>
                                <img src={iconfilter}></img>
                            </Col>
                        </Row>
                    </Container>
                    <div className="data-shop">
                                <Row>
                                    {data.productData.map((item, index) => {
                                        return(
                                            <Col sm={5} className='product'>
                                                    <Col sm={3}className="img">
                                                        <CardImg
                                                            className="img-product"
                                                            src={item.img}
                                                        />
                                                        
                                                    </Col>
                                                    <Col sm={9} className='info-product'>
                                                        <CardTitle className="title-product">
                                                            <Link to='/products/' className="link">
                                                                {item.name}
                                                            </Link>
                                                        </CardTitle>
                                                        <CardText className="price-product">
                                                            {item.price}
                                                        </CardText>
                                                        <CardImg
                                                            className="star-product"
                                                            src={item.star}
                                                        />
                                                        
                                                    </Col>
                                            </Col>
                                        )
                                    })}
                                </Row>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Shop;