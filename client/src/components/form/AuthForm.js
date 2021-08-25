import React, {useState} from 'react'

import Login from './Login';
import Register from './Register';

import './_AuthForm.scss';

function AuthForm() {
    const [displayRegister, setDisplayRegister] = useState(false);
    const handleClick = () => setDisplayRegister(!displayRegister);

    return (
        <div className="AuthForm">
            {displayRegister ? <Register handleClick={handleClick} /> : <Login handleClick={handleClick} />}
        </div>
    )
}

export default AuthForm
