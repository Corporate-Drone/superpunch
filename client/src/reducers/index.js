import { combineReducers } from "redux";

import checkoutItem from "./checkoutItem";
import products from "./products";
import auth from "./auth";

export default combineReducers({
    checkoutItem,
    products,
    auth
})