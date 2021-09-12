import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { removeItem } from '../actions/checkoutItem';

import './_ItemInCart.scss'

function ItemInCart(props) {
    const { item, setSubtotal, subtotal } = props
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(item.price)
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(removeItem(id))
        setSubtotal(subtotal-total)
    }

    const addQuantity = () => {
        setQuantity(quantity + 1)
        setTotal(total + item.price)
        setSubtotal(subtotal + item.price)
    }

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
        if (total > 0) {
            setTotal(total - item.price)
            setSubtotal(subtotal - item.price)
        }
    }

    return (
        <div className="ItemInCart-detail" key={item.id}>
            <Link to={`/shop/${item.id}`}>
                <div>{item.name}</div>
                </Link>
                <img src={item.image} alt={item.name}></img>
                <div className="ItemInCart-detail-quantity">
                    <button onClick={decreaseQuantity}>-</button>
                    <div>{quantity}</div>
                    <button onClick={addQuantity}>+</button>
                </div>
                <div className="ItemInCart-detail-price">${total}</div>
            <button className="ItemInCart-detail-remove" onClick={() => handleClick(item.id)}>Remove</button>
            </div>
    )
}

export default ItemInCart
