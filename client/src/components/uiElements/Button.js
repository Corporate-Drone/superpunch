import React from 'react'

import './_Button.scss'

function Button(props) {
    const { onClick, text, disabled, remove } = props

    return (
        <>
            {!remove && <button onClick={onClick} disabled={disabled} className="Button">
                {text.toUpperCase()}
            </button>}
            {remove && <button onClick={onClick} disabled={disabled} className="Button Button-Remove">
                {text}
            </button>}
        </>
    )
}

export default Button
