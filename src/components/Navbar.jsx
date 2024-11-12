import React from "react";
import logo from "../assets/images/logo.jfif"; 

export default function Navbar(){
    return (
        <nav>
         <img src={logo} alt="React logo" />
         <h3 className="nav-title">ReactFacts</h3>
         <h4 className="nav-subtitle">React Course - Project 1</h4>
        </nav>
    )
}