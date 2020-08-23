import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ navLinks, navActive, setNavActive }) => {
    const style = {
        right: navActive ? "0" : "-300px"
    }


    const linkClicked = () => {
        window.scrollTo(0, 0);
        setNavActive(!navActive);
    };

    return (
        <nav style={style}>
            <ul>
                {navLinks.map((linkObject) => (
                    <li key={linkObject.url}>
                        <NavLink to={linkObject.url} activeClassName="activeMenuItem" exact onClick={linkClicked}>{linkObject.title}</NavLink>
                    </li>))}
            </ul>
        </nav>
    );
}

export default Navbar;