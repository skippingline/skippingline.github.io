import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Asset 11.svg';
import menubar from './icons8menu.svg';

const Header = (props) => {
    const logLeClick = () => {
        const mainElement = document.querySelector("main");
        mainElement.classList.toggle("moveOver");
    }

    const collapseNav = () => {
        const mainElement = document.querySelector("main");
        window.scrollTo(0, 0);
        mainElement.classList.remove("moveOver");
    }


    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <Link to="/" className="logoContainer col-xs-6 valign"><img src={Logo} alt="Company Logo" className="logo" onClick={() => window.scrollTo(0, 0)} /></Link>
                        <div className="logoContainer col-xs-6 valign menuContainer"><img src={menubar} alt="Header Menu" className="menu" onClick={logLeClick} /></div>
                    </div>
                </div>
            </header >
            <div className="navLinks">
                <ul>
                    {props.navLinks.map((linkObject) => (
                        <li key={linkObject.url}>
                            <NavLink to={linkObject.url} activeClassName="activeMenuItem" exact onClick={collapseNav}>{linkObject.title}</NavLink>
                        </li>))}
                </ul>
            </div>
        </>);
}

export default Header;