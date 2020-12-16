import React from 'react'
import './link.scss'

const Link = ({ title, onClick }) => {
    return (
        <div className="link">
            <p onClick={onClick}>{title}</p>
        </div>
    )
}
export default Link