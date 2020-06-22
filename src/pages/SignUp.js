import React from "react";

const SignUp = () => {

    return (
        <div className="row center-xs signupbox">
            <div className="col-xs-6
                            col-sm-4
                            col-md-3">
                <div>
                <div className="namesignuptext">Name</div>
                <input type="text" className="col-xs-10 col-md-6 signupname"/>
                <div className="emailsignuptext">Email</div>
                <input type="text" className="col-xs-10 col-md-6 signupemail"/>
                <div className="passwordsignuptext">Password</div>
                <input type="text" className="col-xs-10 col-md-6 signuppassword"/>
                <button class="signupbutton" type="button">Sign Up!</button>
                </div>
             </div>
        </div>
        );
}

export default SignUp;