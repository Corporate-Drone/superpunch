import axios from 'axios';

import { GET_PRODUCTS, GET_PRODUCT, RESET_PRODUCT, ADD_REVIEW } from './types';

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

export const addReview = (body, date, rating, user, productId) => async dispatch => {
    const data = {
        body,
        date,
        rating,
        user,
        productId
    }
    try {
        axios.post(`/shop/${productId}`, data)
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                dispatch({
                    type: ADD_REVIEW,
                    payload: response.data
                })
                //   history.push('/chirps');
            }
        })
        .catch(error => {
            alert("There was an error posting the review. Please try again.")
        });
    } catch (error) {
        console.log(error)
    }
}