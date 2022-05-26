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
                <Col sm={5} className='productItemInDex'>
                    <Col sm={3}className="imgShopItem">
                        <CardImg
                            className="img-products"
                            src={props.img}
                        />
                    </Col>
                    <Col sm={9} className='info-products'>
                        <CardTitle className="title-products">
                            <Link to='/products/' className="link" onClick={handleItemShop} >
                                {props.name}
                            </Link>
                        </CardTitle>
                        <CardText className="price-products">
                            {props.price} VND
                        </CardText>
                        <CardImg
                            className="star-products"
                            src={props.star}
                        />
                    </Col>
                </Col>
        </div>
    )
}

export default ItemShop;