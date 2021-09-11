import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { removeItem } from '../actions/checkoutItem';
import './_Checkout.scss'

function Checkout(props) {
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();

    const state = useSelector(state => state)

    const handleClick = (id) => {
        dispatch(removeItem(id))
    }

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    let cartItems;
    if (state && state.items.length > 0) {
        cartItems = state.items.map(item => (
            <div className="Checkout-detail" key={item.id}>
                <div>{item.name}</div>
                <img src={item.image} alt={item.name}></img>
                <div className="Checkout-detail-quantity">
                    <button onClick={decreaseQuantity}>-</button>
                    <div>{quantity}</div>
                    <button onClick={addQuantity}>+</button>
                </div>
                <div className="Checkout-detail-price">${item.price}</div>
                <button className="Checkout-detail-remove" onClick={() => handleClick(item.id)}>Remove</button>
            </div>
        )) //map through state.items
    }

    return (
        <div className="Checkout">
            <h1>Your Shopping Cart</h1>
            {/* <div className="Checkout-detail">
                <img src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'></img>
                <div className="Checkout-detail-quantity">
                    <button onClick={decreaseQuantity}>-</button>
                    <div>{quantity}</div>
                    <button onClick={addQuantity}>+</button>
                </div>
                <div className="Checkout-detail-price">${total}</div>
                <button className="Checkout-detail-remove" onClick={handleClick}>Remove</button>
            </div> */}
            {cartItems}
            <div>Total: ${total}</div>
            <button>Checkout</button>
        </div>
    )
}

export default Checkout
