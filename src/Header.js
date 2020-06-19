import React from 'react';
import Logo from './Asset 11.svg';

const Header = () => {
    return (
        <header className="row">
            <div className="logoContainer col-xs-6"><img src={Logo} alt="Company Logo" className="logo" /></div>
            <p className="col-xs-6">his is the header</p>
        </header >);
}

export default Header;