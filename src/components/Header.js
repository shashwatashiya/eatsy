
import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
const [btnName, setbtnName] = useState("Login");
    return (

        <div className = "header"> 
        <div className="logo-container"> 
            <img className="logo" src = {logo} alt="company logo"/> 
        </div>

        <div className="nav-items">
        <ul>

            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className = "login" onClick = {() => { btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
        </ul>

        </div>
        </div>

    )
}

export default Header;
