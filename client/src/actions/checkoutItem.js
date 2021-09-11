import axios from 'axios';

export const addItem = item => async dispatch => {
    dispatch({
        type: 'add',
        payload: item
    })
    // return {
    //     type: 'add'
    // }
}

export const removeItem = item => async dispatch => {
    dispatch({
        type: 'remove',
        payload: item
    })
    // return {
    //     type: 'remove'
    // }
} 