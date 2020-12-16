import React from 'react'
import './button.scss'

const Button = ({ button, ...rest }) => {
    return (
        <div className="button-wrapper">
            <button className="button" {...rest}>{button}</button>
        </div>
    )
}

export default Button
