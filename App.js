import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.png';

/*

* Header 
    - Logo
    - Nav Items
* Body 
    - Search
    - Restaurant container 
     -  Restaurant card
* Footer 
    - Links and policies

*/

const Header = () => {

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
        </ul>

        </div>
        </div>

    )
}

const AppLayout = () => {

    return (
    
    
        <div className = "app">
        <Header/>
        
    
        </div>
    )
    
    }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
    
