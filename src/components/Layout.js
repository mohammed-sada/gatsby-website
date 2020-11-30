import React from 'react';
import "./layout.css";
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="wrapper">
            <div className="card">
                <div className="contents">

                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Layout
