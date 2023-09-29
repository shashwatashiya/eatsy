
import { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
   
    
const [btnName, setbtnName] = useState("Login");



    return (

        <div className = "header"> 
        <div className="logo-container"> 
          <Link to ="/">  <img className="logo" src = {logo} alt="company logo"/> </Link>
        </div>

        <div className="nav-items">
        <ul>

            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li>Cart</li>
            <button className = "login" onClick = {() => { btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
            
        </ul>

        </div>
        </div>

    )
}

export default Header;
