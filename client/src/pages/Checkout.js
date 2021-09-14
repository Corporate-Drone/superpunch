import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

import ItemInCart from '../components/ItemInCart';
import './_Checkout.scss'

function Checkout() {
    const [subtotal, setSubtotal] = useState(0);
    const history = useHistory();
    
    const state = useSelector(state => state)

    //add item prices in cart to get subtotal on page loaded
    useEffect(() => {
        if (state && state.items.length > 0) {
            for (const item of state.items) {
                setSubtotal(subtotal + item.price)
            }
        }
    }, [])

    const handleCheckoutClick = () => {
        history.push('/')
    }

    const handleBrowseClick = () => {
        history.push('/shop')
    }

    let cartItems;
    if (state && state.items.length > 0) {
        cartItems = state.items.map(item => (
            <ItemInCart item={item} setSubtotal={setSubtotal} subtotal={subtotal} />
        )) //map through state.items
    }

    return (
        <div className="Checkout">
            <h1>Your Shopping Cart</h1>
            {cartItems}
            {state && state.items.length <= 0 && <div>Your cart is empty.</div>}
            <div>Subtotal: ${subtotal}</div>
            {state && state.items.length > 0 && <button onClick={handleCheckoutClick}>Checkout</button>}
            {state && state.items.length <= 0 && <button onClick={handleBrowseClick}>Browse Products</button>}
        </div>
    )
}

export default Checkout
