import React from "react";
import { Row, Col, CardText, CardTitle, CardImg, Button } from "reactstrap";
import removebutton from "../img/remove-button.png";
import '../Page/ItemCart.css';
import { useAppSelector } from "../redux/hook";
import { selectQuantity } from "../redux/productSlice";
import { useAppDispatch } from "../redux/hook";
import { removeToCart } from '../redux/productSlice';

interface itemProductProps {
    id: string;
    img: string;
    name: string;
    description: string;
    price: string;
    total: number;
}

const ItemCart: React.FC<itemProductProps> = (props) => {
    const dispatch = useAppDispatch();
    const Quantity = useAppSelector(selectQuantity)

    const handleRemove = () => {
        dispatch(removeToCart({
            id: props.id,
            total: 1
        }))
    }

    return (
        <div className="itemCart">
            <Row className="data-cart-row">
                <Col sm={2} className="img-cart-data-col">
                    <CardImg 
                        className="img-cart-data"
                        src={props.img}
                    ></CardImg>
                </Col>
                <Col sm={6} className="info-cart-data-col">
                    <CardTitle className="info-cart-data-name">
                        {props.name}
                    </CardTitle>
                    <CardText className="info-cart-data-description">
                        {props.description}
                    </CardText>
                    <CardText className="info-cart-data-price">
                        {props.price} VND
                    </CardText>
                </Col>
                <Col sm={2} className="button-cart">
                    <Button 
                        className="button-cart-up"
                    >
                        <span>+</span>
                    </Button>
                    <CardText className="quantity-product"> <span>{props.total}</span> </CardText>
                    <Button
                        className="button-cart-down"
                    >
                        <span>-</span>
                    </Button>
                    <img 
                        src={removebutton}
                        className="button-cart-remove"
                        alt=""
                        onClick={handleRemove}
                    />

                </Col>
            </Row>
        </div>
    )
}

export default ItemCart;