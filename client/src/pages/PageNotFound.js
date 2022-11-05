import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <Link to="/home"> 
            <div className="error">
            </div>
        </Link>
    )
}

export default PageNotFound