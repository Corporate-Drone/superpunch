import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { removeItem } from '../actions/checkoutItem';

import './_ItemInCart.scss'
import Button from './uiElements/Button';

function ItemInCart(props) {
    const { item, setSubtotal, subtotal } = props
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(item.price)
    const dispatch = useDispatch();

    //reset quantity and total when an item is removed from cart
    useEffect(() => {
        setTotal(item.price)
        setQuantity(1)
    }, [item])

    const handleClick = (id) => {
        dispatch(removeItem(id))
        setSubtotal(subtotal - total)
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
        <div className="ItemInCart-detail" key={item._id}>
            <div className="ItemInCart-detail-image">
                <Link to={`/shop/${item._id}`}>
                    <div>{item.name}</div>
                </Link>
                <img src={item.image} alt={item.name}></img>
            </div>
            <div className="ItemInCart-detail-quantity">
                <Button onClick={decreaseQuantity} text={"-"} />
                <div>{quantity}</div>
                <Button onClick={addQuantity} text={"+"} />
            </div>
            <div className="ItemInCart-detail-price">${total}</div>
            <Button className="button" remove={true} onClick={() => handleClick(item._id)} text={"Remove"} />
        </div>
    )
}

export default ItemInCart
