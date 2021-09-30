import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'

import ItemInCart from '../components/ItemInCart';
import './_Checkout.scss'

function Checkout() {
    const [subtotal, setSubtotal] = useState(0);
    const history = useHistory();
    
    const items = useSelector(state => state.checkoutItem.items)

    //add item prices in cart to get subtotal on page loaded or when items change
    useEffect(() => {
        if (items.length > 0) {
            let itemTotals = 0;
            for (const item of items) {
                itemTotals = itemTotals + item.price
            }
            setSubtotal(itemTotals)
        }
    }, [items])

    const handleCheckoutClick = () => {
        history.push('/')
    }

    const handleBrowseClick = () => {
        history.push('/shop')
    }

    let cartItems;
    if (items.length > 0) {
        cartItems = items.map(item => (
            <ItemInCart item={item} setSubtotal={setSubtotal} subtotal={subtotal} />
        )) //map through state.items
    }

    return (
        <div className="Checkout">
            <h1>Your Shopping Cart</h1>
            {cartItems}
            {items.length <= 0 && <div>Your cart is empty.</div>}
            <div>Subtotal: ${subtotal}</div>
            {items.length > 0 && <button onClick={handleCheckoutClick}>Checkout</button>}
            {items.length <= 0 && <button onClick={handleBrowseClick}>Browse Products</button>}
        </div>
    )
}

export default Checkout
