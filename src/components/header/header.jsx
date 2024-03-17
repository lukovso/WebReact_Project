import React, { useState } from "react";
import "../header/header.css"
import {Link} from "react-router-dom"


const Header = () =>{

    return(
        <header className="header">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>
            <div className="links">
                <a href="#">
                <Link to="/" className="linkHover"><span>00</span> HOME</Link>
                </a>
                <a href="#">
                <Link to="/destination" className="linkHover"><span>01</span> DESTINATION</Link>
                </a>
                <a href="#">
                <Link to="/crew" className="linkHover"><span>02</span> CREW</Link>
                </a>
                <a href="#">
                <Link to="/technology" className="linkHover"><span>03</span> TECHNOLOGY</Link>
                </a>
            </div>
        </header>
    )
}

export default Header