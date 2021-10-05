import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Gloves from '../../assets/boxing-gloves.png';
import "./_Header.scss";
import { resetProduct } from '../../actions/products';
import { LOGOUT } from '../../actions/types';

const Header = () => {
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleMenuClick = () => {
    closeMobileMenu()
    
    if (product) {
      dispatch(resetProduct())
    }
  }

  const handleLogout = () => {
    dispatch({
      type: LOGOUT
  })
  }

  const items = useSelector(state => state.checkoutItem.items)
  const product = useSelector(state => state.products.product)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  let itemsInCart;
  if (items) {
    itemsInCart = items.length
  }

  return (
    <div className="header">
      <div className="header-logo-nav">
        <div className="header-logo-container">
          <a href="/">
            <img src={Gloves} alt="logo" className="logo"></img>
          </a>
        </div>
        <ul className={click ? "header-nav-options active" : "header-nav-options"}>
          <li className="option">
            <Link onClick={handleMenuClick}to="/home">Home</Link>
          </li>
          <li className="option">
            <Link onClick={handleMenuClick} to="/shop">Shop</Link>
          </li>
          <li className="option">
            {!isAuthenticated && <Link onClick={handleMenuClick} to="/auth">Login</Link>}
            {isAuthenticated && <Link onClick={handleLogout} to="/">Logout</Link>}
          </li>
          <li className="option">
            <Link onClick={handleMenuClick} to="/checkout">Checkout ({itemsInCart})</Link>
          </li>
        </ul>
      </div>
      <div>
      </div>
      <div className="header-mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;