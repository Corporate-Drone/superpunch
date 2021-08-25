import React from 'react'

import './_Product.scss'

function Product() {
    return (
        <div className="Product">
            <img src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'></img>
            <div className="Product-info">
                <div className="Product-info-name">Name</div>
                <div className="Product-info-data">
                    <div>$1.00</div>
                    <div>Rating</div>
                </div>
            </div>
        </div>
    )
}

export default Product
