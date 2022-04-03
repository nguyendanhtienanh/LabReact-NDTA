import React from "react";
import '../Page/Shop.css';
import TopHome from "../Components/TopHome";
import Menu from "../Components/Menu";
import { Input } from "reactstrap";
import iconsearch from '../img/iconsearch.png';
import iconfilter from '../img/iconfilter.png';
import { Link } from "react-router-dom";

const Shop: React.FC = () => {
    return(
        <div className="Shop">
            <TopHome></TopHome>
            <div className="body-shop">
                <Menu></Menu>
                <div className="content-shop">
                    <div className="header-shop" >
                        <div className="title-header">
                            <p>SHOP</p>
                        </div>
                        <div className="content-header">
                            <div className="link-header">
                                <Link to="/shop/">
                                    Shop
                                </Link>
                            </div>
                            <div className="search">
                                <div className="input-search">
                                    <Input
                                        type="text"
                                        placeholder="Search ..."
                                    />
                                    <img src={iconsearch}></img>
                                </div>
                                <div className="filter">
                                    <img src={iconfilter}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>


                </div>
            </div>
        </div>
    );
}

export default Shop;