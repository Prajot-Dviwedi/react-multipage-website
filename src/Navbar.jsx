import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/services">Services</Link>
            </nav>
        </div>
    )
}

export default Navbar