import React from 'react';
import Logo from './Asset 11.svg';

const Header = () => {
    return (
        <header className="row">
            <div className="logoContainer col-xs-6 valign"><img src={Logo} alt="Company Logo" className="logo" /></div>
            <p className="col-xs-offset-4 col-xs-2  calign">💣</p>
        </header >);
}

export default Header;