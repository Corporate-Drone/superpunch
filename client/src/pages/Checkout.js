import React, { useState } from 'react'

import './_Checkout.scss'

function Checkout(props) {
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="Checkout">
            <h1>Your Shopping Cart</h1>
            <div className="Checkout-detail">
                <img src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'></img>
                <div className="Checkout-detail-quantity">
                    <button onClick={decreaseQuantity}>-</button>
                    <div>{quantity}</div>
                    <button onClick={addQuantity}>+</button>
                </div>
                <div className="Checkout-detail-price">${total}</div>
            </div>
        </div>
    )
}

export default Checkout
