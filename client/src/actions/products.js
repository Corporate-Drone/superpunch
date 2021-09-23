import axios from 'axios';

import { GET_PRODUCTS, GET_PRODUCT, RESET_PRODUCT } from './types';

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get('/shop')
        
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const getProduct = (id) => async dispatch => {
    try {
        const res = await axios.get(`/shop/${id}`, {
            params: {id}
        })
        
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    }
}

//reset previously product already loaded
export const resetProduct = () => dispatch => {
    dispatch({
        type: RESET_PRODUCT
    })
}