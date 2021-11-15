import axios from 'axios';

import { LOGIN_FAIL,REGISTER_FAIL, LOGIN_SUCCESS, REGISTER_SUCCESS} from './types';

export const registerUser = (username, email, password) => async dispatch => {
    try {
        const data = {
            username,
            email,
            password
        }
        axios.post('/auth/register', data)
            .then(response => {
                if (response.status === 200 && response.data.token) {
                    dispatch({
                        type: REGISTER_SUCCESS,
                        payload: response.data
                    })
                } else {
                    dispatch({
                        type: REGISTER_FAIL
                    })
                }
            })
            .catch(error => {
                dispatch({
                    type: REGISTER_FAIL
                })
             }) 
    } catch (error) {
        console.log(error)
    }

}

export const loginUser = (username, password) => async dispatch => {
    try {
        const data = {
            username,
            password
        }
        axios.post('/auth/login', data)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: response.data
                    })
                    //   history.push('/chirps');
                }
            })
            .catch(error => {
                dispatch({
                    type: LOGIN_FAIL
                })
            });
    } catch (error) {
        console.log(error)
    }
}
