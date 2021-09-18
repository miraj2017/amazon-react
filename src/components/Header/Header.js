import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Home</a>
                <a href="/product">Product</a>
                <a href="/buy">Buy</a>
            </nav>
        </div>
    );
};

export default Header;