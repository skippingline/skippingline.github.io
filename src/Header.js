import React from 'react';
import Logo from './Asset 11.svg';
import menubar from './icons8menu.svg'

const Header = () => {
    return (
        <header className="row">
            <div className="logoContainer col-xs-6 valign"><img src={Logo} alt="Company Logo" className="logo" /></div>
            <div className="logoContainer col-xs-6 valign"><img src={menubar} alt="Header Menu" className="menu" /></div>
        </header >);
}

export default Header;