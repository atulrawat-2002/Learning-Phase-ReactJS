import { LOGO_URL } from '../utils/constants'
import { useState, useEffect } from 'react';
import {  NavLink } from 'react-router-dom';

const Header = () => {
    
    const [btnName, setBtnName] = useState("Login")
    useEffect(() => {
    }, [btnName])


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="navitems">
                <ul>
                    <NavLink to='/' > <li>Home</li></NavLink>
                    <NavLink to="/about" ><li>About Us</li></NavLink>
                    <NavLink to="/contact"><li>Contact Us</li></NavLink>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                      btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;