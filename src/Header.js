import React from 'react';
import { Link } from 'react-router-dom';
import NavButton from './NavButton';


const Header = ({ navActive, setNavActive }) => {
    const logoClicked = () => {
        window.scrollTo(0, 0);
        setNavActive(false);
    }
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <Link to="/" className="logoContainer col-xs-6 valign" onClick={logoClicked}><img src="/mainLogo.svg" alt="Company Logo" className="logo"  /></Link>
                        <div className="logoContainer col-xs-6 valign menuContainer">
                            <NavButton navActive={navActive} setNavActive={setNavActive} />
                        </div>
                    </div>
                </div>
            </header>
        </>);
}

export default Header;