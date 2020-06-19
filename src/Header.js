import React from 'react';
import Logo from './Asset 11.svg';

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="Company Logo" className="logo" />
            <p>his is the header</p>
        </header >);
}

export default Header;