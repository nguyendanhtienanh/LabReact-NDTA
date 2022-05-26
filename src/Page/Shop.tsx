import React, { useState } from "react";
import '../Page/Shop.css';
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import ItemShop from "./ItemShop";
import { Input, Container, Row, Col } from "reactstrap";
import iconsearch from '../img/iconsearch.png';
import iconfilter from '../img/iconfilter.png';
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { selectShop } from "../redux/shopSlice";

const Shop: React.FC = () => {

    const itemShop = useAppSelector(selectShop);

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
                                <img src={iconsearch} alt=""></img>
                            </Col>
                            <Col sm={1} className='filter-col'>
                                <img src={iconfilter} alt=""></img>
                            </Col>
                        </Row>
                    </Container>
                    <div className="data-shop">
                        {itemShop.map((item) => {
                            return(
                                <ItemShop
                                    id={item.id}
                                    img={item.img}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    star={item.star}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Shop;