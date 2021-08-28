import React from 'react'
import { Link, useHistory } from "react-router-dom";

import './_Product.scss'

function Product(props) {
    const { name, image, category, price, rating } = props;
    return (
        <div className="Product">
            <Link>
                <img src={image}></img>
                <div className="Product-info">
                    <div className="Product-info-name">{name}</div>
                    <div className="Product-info-data">
                        <div>${price}</div>
                        <div>{rating}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product
