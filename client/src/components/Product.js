import React from 'react'
import { Link, useHistory } from "react-router-dom";
import ReactStars from 'react-stars'

import './_Product.scss'

function Product(props) {
    const { name, image, category, price, rating, id } = props;
    const altName = name.split(' ').join('');
    return (
        <div className="Product">
            <Link to={`/shop/${id}`}>
                <img src={image} alt={altName}></img>
                <div className="Product-info">
                    <div className="Product-info-name">{name}</div>
                    <div className="Product-info-data">
                        <div className="Product-info-data-price">${price}</div>
                        <ReactStars
                        count={5}
                        size={24}
                        color2={'#ffd700'}
                        half={false}
                        edit={false}
                        value={rating}
                    />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product
