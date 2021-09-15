import { combineReducers } from "redux";

import checkoutItem from "./checkoutItem";
import products from "./products";

export default combineReducers({
    checkoutItem,
    products
})