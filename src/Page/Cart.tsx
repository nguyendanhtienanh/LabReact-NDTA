import React from "react";
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import { Container, Row, Col, CardText, CardTitle, CardImg, Button } from "reactstrap";
import '../Page/Cart.css';
import { useCart } from "react-use-cart";
import removebutton from "../img/remove-button.png";

const Cart: React.FC = () => {

    const { totalItems, items, removeItem, cartTotal, updateItemQuantity} = useCart();

    var subTotal: number = cartTotal
    var tax: number = cartTotal *10 /100
    var total: number = subTotal + tax

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
                                <p>{totalItems} Items in bag </p>
                            </Col>
                        </Row>
                    </Container>
                    <div className="data-cart">
                        {items.map((item) => {
                            return(
                                <>
                                <div>
                                    <Row className="data-cart-row">
                                        <Col sm={2} className="img-cart-data-col">
                                            <CardImg 
                                                className="img-cart-data"
                                                src={item.img}
                                            ></CardImg>
                                        </Col>
                                        <Col sm={6} className="info-cart-data-col">
                                            <CardTitle className="info-cart-data-name">
                                                {item.name}
                                            </CardTitle>
                                            <CardText className="info-cart-data-description">
                                                {item.description}
                                            </CardText>
                                            <CardText className="info-cart-data-price">
                                                {item.price} VND
                                            </CardText>
                                        </Col>
                                        <Col sm={2} className="button-cart">
                                            <Button 
                                                className="button-cart-up"
                                                onClick={() => updateItemQuantity(item.id, item.quantity as number + 1)}
                                            >
                                                <span>+</span>
                                            </Button>
                                            <CardText className="quantity-product"> <span>{item.quantity}</span> </CardText>
                                            <Button
                                                className="button-cart-down"
                                                onClick={() => updateItemQuantity(item.id, item.quantity as number - 1)}
                                            >
                                                <span>-</span>
                                            </Button>
                                            <img 
                                                src={removebutton} 
                                                onClick={() => removeItem(item.id)}
                                                className="button-cart-remove"
                                                alt=""   
                                            />

                                        </Col>
                                    </Row>
                                </div>
                                </>
                            )
                        })}
                        <div className="total-cart">
                                    <div className="subTotal">
                                        Subtotal: {subTotal} VND
                                    </div>
                                    <div className="tax">
                                        Tax: {tax} VND
                                    </div>
                                    <div className="toal">
                                        Total: {total} VND
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;