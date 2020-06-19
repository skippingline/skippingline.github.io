import React from 'react';
import Logo from './Asset 11.svg';

const Header = () => {
    return (
        <header className="row">
            <div className="logoContainer col-xs-6 valign"><img src={Logo} alt="Company Logo" className="logo" /></div>
            <p className="bomb col-xs-offset-4 col-md-offset-5 col-xs-2 col-md-1  calign"><span role="img" aria-label="bomb">💣</span></p>
        </header >);
}

export default Header;