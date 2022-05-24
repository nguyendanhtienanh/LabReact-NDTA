import React from "react";
import { Row, Col, CardText, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import '../Page/ItemShop.css';
import { showProduct } from '../redux/shopSlice';
import { useAppDispatch } from "../redux/hook";

interface itemShopProps {
    id: string;
    img: string;
    name: string;
    description: string;
    price: number;
    star: string;
}

const ItemShop: React.FC<itemShopProps> = (props) => {

    const dispatch = useAppDispatch();

    const handleItemShop = () => {
        dispatch(showProduct(props.id))
    }

    return (
        <div className="itemCart">
            <Row>
                <Col sm={5} className='product'>
                    <Col sm={3}className="img">
                        <CardImg
                            className="img-product"
                            src={props.img}
                        />
                    </Col>
                    <Col sm={9} className='info-product'>
                        <CardTitle className="title-product">
                            <Link to='/products/' className="link" onClick={handleItemShop} >
                                {props.name}
                            </Link>
                        </CardTitle>
                        <CardText className="price-product">
                            {props.price} VND
                        </CardText>
                        <CardImg
                            className="star-product"
                            src={props.star}
                        />
                    </Col>
                </Col>
            </Row>
        </div>
    )
}

export default ItemShop;