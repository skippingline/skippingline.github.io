import React from "react";

const SignIn = () => {
    return (
        <div className="container signuppage">
            <div className="row center-xs signuppage">
                <div className="col-xs-10
                            col-sm-6
                            col-md-6 col-lg-4 signupbox container">
                    <div className="row">
                        <label htmlFor="email" className="col-xs-12">Email</label>
                        <input name="email" type="email" id="signupemail" className="col-xs-12 " />
                        <label htmlFor="password" className="col-xs-12">Password</label>
                        <input name="password" type="password" id="signuppassword" className="col-xs-12" />
                    </div>
                    <div className="row">
                        <button className="col-xs-8 col-xs-offset-2 signupbutton" type="button" onClick={''}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;