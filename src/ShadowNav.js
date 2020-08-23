import React from "react";

const ShadowNav = ({ navActive, setNavActive }) => {
    const style = {
        backgroundColor: navActive ? "rgba(0,0,0,.7)" : "rgba(0,0,0,0)",
        zIndex: navActive ? "900" : "-10"
    }

    return (
        <div className="shadowNav" style={style} onClick={() => setNavActive(!navActive)}></div>
    );
}

export default ShadowNav;