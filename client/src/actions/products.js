import axios from 'axios';

import { GET_PRODUCTS, GET_PRODUCT, RESET_PRODUCT, ADD_REVIEW, REMOVE_REVIEW, GET_REVIEWS } from './types';

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
        dispatch({
            type: GET_REVIEWS,
            payload: res.data.reviews
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
                console.log(response.data)
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

export const removeReview = (id, productId) => async dispatch => {
    const authorizationToken = localStorage.getItem('token');
    const headers = {
        Authorization: authorizationToken
    }

    const data = {
        id,
        productId
    }
    try {
        await axios.delete(`/shop/${productId}`, {headers,data})
        .then(response => {
            console.log(response)
            if (response.status === 200) {
                dispatch({
                    type: REMOVE_REVIEW,
                    payload: data.id
                })
            }
        })
        .catch(error => {
            alert("There was an error posting the review. Please try again.")
        });
    } catch (error) {
        console.log(error)
    }
}