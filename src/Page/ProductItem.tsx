import React from "react";
import '../Page/ProductItem.css';
import { Row, Col, Button, CardText, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import { useCart } from 'react-use-cart'

interface item {
    id: string;
    img: string;
    name: string;
    description: string;
    price: number;
    star: string;
    more: string;
}

interface itemProductProps {
    id: string;
    img: string;
    name: string;
    description: string;
    price: number;
    star: string;
    more: string;
    item: item;
}

const ProductItem: React.FC<itemProductProps> = (props) => {

    const { addItem} = useCart ();

    return(
        <div className="ProductItem">
            <Row>
                <Col sm={4} className="img-product-data-row">
                    <CardImg 
                        className="img-product-data"
                        src={props.img}
                    ></CardImg>
                </Col>
                <Col sm={8} className="info-product-data-row">
                    <CardTitle className="info-product-data-name">
                        {props.name}
                    </CardTitle>
                    <CardText className="info-product-data-description">
                        {props.description}
                    </CardText>
                    <CardText className="info-product-data-price">
                        {props.price} VND
                    </CardText>
                    <CardImg
                        className="info-product-data-star"
                        src={props.star}
                    />
                    <div className="info-product-data-button">
                        <Link to='/cart'>
                            <Button className="button-buy">
                                Mua Ngay
                            </Button>
                        </Link>
                        <Button className="button-addtocart" onClick={() => addItem(props.item, 1)}>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </Col>
                <Col>
                    <CardImg
                        className="info-product-data-more"
                        src={props.more}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default ProductItem;