import React from "react";
import '../Page/ProductItem.css';
import { Row, Col, Button, CardText, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import { addToCart } from '../redux/productSlice';
import { useAppDispatch } from "../redux/hook";

interface itemProductProps {
    id: string;
    img: string;
    name: string;
    description: string;
    price: number;
    star: string;
    more: string;
}

const ProductItem: React.FC<itemProductProps> = (props) => {

    const dispatch = useAppDispatch();

    const handleAddtoCart = () => {
        dispatch(addToCart({
            id: props.id,
            img: props.img,
            name: props.name,
            description: props.description,
            price: props.price,
            total: 1
        }))
    }

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
                            <Button className="button-buy" onClick={handleAddtoCart}>
                                Mua Ngay
                            </Button>
                        </Link>
                        <Button className="button-addtocart" onClick={handleAddtoCart}>
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