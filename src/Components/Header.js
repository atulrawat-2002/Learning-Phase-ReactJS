import { LOGO_URL } from '../utils/constants'
import { useState, useEffect, useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
    
    const { loggedIn } = useContext(UserContext);
    const [btnName, setBtnName] = useState("Login")

    const cartItems = useSelector((store) => store.cart.items);

    useEffect(() => {
    }, [btnName])


    return (
        <div className="flex justify-between bg-pink-100 shadow-xl ">
            <div className="">
                <img className="w-40 " src={LOGO_URL} />
            </div>
            <div className=" flex items-center p-3">
                <ul className='flex justify-between'>
                    <li className=' px-3 ' >Online Status {useOnlineStatus() ? '😊' : '😭'}</li>
                     <li className=' px-3 ' ><NavLink to='/' >Home</NavLink></li>
                     <li className=' px-3 ' ><NavLink to='/about' >About us</NavLink></li>
                     <li className=' px-3 ' ><NavLink to='/contact' >Contact us</NavLink></li>
                     <li className=' px-3 ' ><NavLink to='/grocery' >Grocery</NavLink></li>
                    <li className=' px-3 font-semibold' ><NavLink to='/cart' >cart- {cartItems.length} Items </NavLink></li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                    <li className=' px-3 ' >{ loggedIn }</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;