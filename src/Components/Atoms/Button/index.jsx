import React from 'react'
import './button.scss'

const Button = ({ button, ...rest }) => {
    return <button className="button" {...rest}>{button}</button>
}

export default Button
