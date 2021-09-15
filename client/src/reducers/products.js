import { GET_PRODUCT, GET_PRODUCTS } from "../actions/types";

const initialState = {
    products: [],
    product: null,
    loading: true
}

const products = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        default:{
            return state // We return the default state here
         }
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                loading: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: payload,
                loading: false
            }
    }
}

export default products;