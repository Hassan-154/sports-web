import React from 'react'
import '../cssFiles/error.css'
import { NavLink } from 'react-router-dom'
function Error() {
    return (
        <div className="error__page">
            <h1>404 Error Page</h1>
            <p>Sorry, This page doesn't exist.</p>
            <div className="error__button">
            <NavLink className="error__button" to="/">Go Back</NavLink>
            </div>
        </div>
    )
}

export default Error
