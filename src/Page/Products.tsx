import React from "react";
import '../Page/Products.css';
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import { Link } from "react-router-dom";
import iconcart from '../img/shopping-cart.png';
import { Container, Row, Col} from "reactstrap";
import ProductItem from "./ProductItem";
import { useAppSelector } from "../redux/hook";
import { selectProducts } from "../redux/shopSlice";
import { selectQuantity } from "../redux/productSlice";



const Products: React.FC = () => {

    const itemProduct = useAppSelector(selectProducts)
    const quantity = useAppSelector(selectQuantity)

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
                                <span>{quantity}</span>
                            </Col>
                        </Row>
                    </Container>
                    <div className="data-shop">
                        <Container>
                            {itemProduct.map((item) => {
                                return(
                                    <ProductItem 
                                        id={item.id}
                                        img={item.img}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        star={item.star}
                                        more={item.more}
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