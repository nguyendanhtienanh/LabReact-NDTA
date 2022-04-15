import React from "react";
import '../Page/Products.css';
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import { Link } from "react-router-dom";
import iconcart from '../img/shopping-cart.png';
import { Container, Row, Col} from "reactstrap";
import data from "../Page/data";
import ProductItem from "./ProductItem";
import { useCart } from "react-use-cart";

const Products: React.FC = () => {

    const { totalItems } = useCart();

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
                                <img src={iconcart} alt=""></img>
                                <span>{totalItems}</span>
                            </Col>
                        </Row>
                    </Container>
                    <div className="data-shop">
                        <Container>
                            {data.productData.map((item) => {
                                return (
                                    <ProductItem 
                                        id={item.id}
                                        img={item.img} 
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        star={item.star}
                                        more={item.more}
                                        item={item}
                                    />
                                );
                            })}
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;