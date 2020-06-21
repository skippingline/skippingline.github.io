import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Asset 11.svg';


const Header = (props) => {
    const logLeClick = () => {
        const mainElement = document.querySelector("main");

        mainElement.classList.toggle("moveOver");
    }

    const collapseNav = () => {
        const mainElement = document.querySelector("main");
        window.scrollTo(0, 0);
        document.getElementById("reverseAnimation").beginElement();
        mainElement.classList.remove("moveOver");
    }


    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <Link to="/" className="logoContainer col-xs-6 valign"><img src={Logo} alt="Company Logo" className="logo" onClick={() => window.scrollTo(0, 0)} /></Link>
                        <div className="logoContainer col-xs-6 valign menuContainer"><svg onClick={logLeClick} className="menu" viewBox="25 25 50 50" xmlns="http://www.w3.org/2000/svg">
                            <g strokeDasharray="21 100" strokeDashoffset="82" stroke="#aaa" strokeWidth="3" strokeLinecap="round" fill="none">
                                <path d="M0 40h62c13 0 6 28-4 18L35 35" />
                                <path d="M0 50h70" />
                                <path d="M0 60h62c13 0 6-28-4-18L35 65" />

                                <animate attributeName="stroke-dashoffset"
                                    values="82;26"
                                    dur="0.4s"
                                    fill="freeze"
                                    begin="startAnimation.begin" />

                                <animate attributeName="stroke-dashoffset"
                                    values="26;82"
                                    dur="0.4s"
                                    fill="freeze"
                                    begin="reverseAnimation.begin" />
                            </g>
                            <rect id="animate" x="25" y="25" width="50" height="50" fillOpacity="0" />


                            <circle cx="50" cy="50" r="50" fill="red" style={{ cursor: "pointer" }} fillOpacity="0">
                                <animate dur="0.01s" id="startAnimation" attributeName="r" values="16; 0" fill="freeze" begin="click; indefinite" />
                                <animate dur="0.01s" attributeName="r" values="0; 50" fill="freeze" begin="reverseAnimation.end" />
                            </circle>
                            <circle cx="50" cy="50" r="0" fill="green" style={{ cursor: "pointer" }} fillOpacity="0">
                                <animate dur="0.001s" id="reverseAnimation" attributeName="r" values="16; 0" fill="freeze" begin="click; indefinite" />
                                <animate dur="0.001s" attributeName="r" values="0; 50" begin="startAnimation.end" fill="freeze" />
                            </circle>
                        </svg></div>
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