import React from 'react'
import { Link } from "gatsby";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/products">Products</Link>
            <Link to="/example">Example</Link>
            <Link to="/images">Images</Link>
        </div>
    )
}

export default Navbar

