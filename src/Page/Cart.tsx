import React from "react";
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import { Container, Row, Col } from "reactstrap";
import '../Page/Cart.css';
import { useAppSelector } from "../redux/hook";
import { selectProduct, selectQuantity, selectSubTotal } from "../redux/productSlice";
import ItemCart from '../Page/ItemCart';


const Cart: React.FC = () => {

    const itemCart = useAppSelector(selectProduct)
    const SubTotal = useAppSelector(selectSubTotal)
    const quantity = useAppSelector(selectQuantity)
    const Tex = SubTotal * 10/100;
    const Total = SubTotal - Tex;

    return(
        <div className="Cart">
            <TopHome></TopHome>
            <div className="body-Cart">
                <Menu></Menu>
                <div className="content-Cart">
                    <Container className="header-Cart">
                        <Row className="title-cart-row">
                            <Col className="title-cart-col">
                                Cart
                            </Col>
                        </Row>
                        <Row className="header-cart-row">
                            <Col className="icon-cart">
                                <p> {quantity} Items in bag </p>
                            </Col>
                        </Row>
                    </Container>
                    <div className="data-cart">
                        <Container>
                            {itemCart.map((item) => {
                                return(
                                    <ItemCart
                                        id={item.id}
                                        img={item.img}
                                        name={item.name}
                                        price={item.price}
                                        description={item.description}
                                        quantity={item.quantity}
                                    />
                                );
                            })}
                            <div className="subtotal"> SubTotal: {SubTotal} VND </div>
                            <div className="tex"> Tex: {Tex} VND </div>
                            <div className="total"> Total: {Total} VND </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;