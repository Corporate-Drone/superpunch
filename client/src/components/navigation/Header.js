import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from "react-router-dom";

import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Gloves from '../../assets/boxing-gloves.png';
import "./_Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="header-logo-nav">
        <div className="header-logo-container">
          <a href="/">
            <img src={Gloves} className="logo"></img>
          </a>
        </div>
        <ul className={click ? "header-nav-options active" : "header-nav-options"}>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="home">Home</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="shop">Shop</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="auth">Login</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="checkout">Checkout</Link>
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