import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ navLinks }) => {
    const collapseNav = () => {
        const mainElement = document.querySelector("main");
        window.scrollTo(0, 0);
        document.getElementById("reverseAnimation").beginElement();
        mainElement.classList.remove("moveOver");
    };

    return (
        <nav>
            <ul>
                {navLinks.map((linkObject) => (
                    <li key={linkObject.url}>
                        <NavLink to={linkObject.url} activeClassName="activeMenuItem" exact onClick={collapseNav}>{linkObject.title}</NavLink>
                    </li>))}
            </ul>
        </nav>
    );
}

export default Navbar;