import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar">
            <h1>The DisPisDis Blog</h1>
            <div className="lists">

                
                <Link to="/">Home</Link>
                <Link to="/create" className="new-blog-btnStyle">New Blog</Link>
                <Link to="/about">About</Link>
                
            </div>
        </nav>
    )
}
