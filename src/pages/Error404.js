import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h2>Uh Oh! Error 404</h2>
                    <p>It looks like this page does not exist.</p>
                    <Link to="/" className="btn">Return Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Error404;