import { ADD_CART, REMOVE_CART } from './types';

export const addItem = item => async dispatch => {
    dispatch({
        type: ADD_CART,
        payload: item
    })
    // return {
    //     type: 'add'
    // }
}

export const removeItem = item => async dispatch => {
    dispatch({
        type: REMOVE_CART,
        payload: item
    })
    // return {
    //     type: 'remove'
    // }
} 