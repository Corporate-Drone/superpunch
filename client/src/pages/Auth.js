import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

import AuthForm from '../components/form/AuthForm'

import './_Auth.scss'

function Auth() {
    const history = useHistory();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    console.log(isAuthenticated)

    if (isAuthenticated) {
        history.push('/shop')
    }

    return (
        <div className="Auth">
            <AuthForm/>
        </div>
    )
}

export default Auth
