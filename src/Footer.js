import React from "react";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        © {(new Date()).getFullYear()} Skipping Line Inc.
                    </div>
                </div>
            </div>
        </footer>);
}
export default Footer;