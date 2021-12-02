import React from "react";
import "./Navbar.css"
import favicon from '../../images/favicon.png'


const Navbar = () => {
    return(
        <div className="navbar">
            <a href="aboutus">ABOUT US</a>
            <a href="foryou">FOR YOU</a>
            <a href="services">SERVICES</a>
            <img width="100px" src={favicon} alt="logo" />
            <a href="blog" className="active">BLOG</a>            
            <a href="vlog">VLOG</a>            
            <a href="contact">CONTACT</a>            
        </div>
    )
}

export default Navbar;