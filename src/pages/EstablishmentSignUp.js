import React from "react";

const EstablishmentSignUp = () => {
    const submitData = () => {
        alert("your data has been received");
    }

    return (
        <div className="container estsignuppage">
            <div className="row center-xs estsignuppage">
                <div className="col-xs-10
                            col-sm-6
                            col-md-6 col-lg-4 estsignupbox container">
                    <div className="row">
                        <label htmlFor="name" className="col-xs-12">First Name</label>
                        <input name="name" type="text" id="estsignupname" className="col-xs-12 " />
                        <label htmlFor="name" className="col-xs-12">Last Name</label>
                        <input name="name" type="text" id="estsignupname" className="col-xs-12 " />
                        <label htmlFor="email" className="col-xs-12">Email</label>
                        <input name="email" type="email" id="estsignupemail" className="col-xs-12 " />
                        <label htmlFor="password" className="col-xs-12">Password</label>
                        <input name="password" type="password" id="estsignuppassword" className="col-xs-12" />
                        <label htmlFor="name" className="col-xs-12">Establishment Name</label>
                        <input name="name" type="text" id="estname" className="col-xs-12 " />
                        <label htmlFor="name" className="col-xs-12">Establishment Address</label>
                        <input name="name" type="text" id="addressline1" className="col-xs-12 " />
                        <input name="name" type="text" id="addressline2" className="col-xs-12 " />


                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Deleware">Deleware</option>
                            <option value="Florida">Florida</option>
                            <option value="Geordia">Geordia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Lousiana">Lousiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Massachusetts">Massachusetts</option>
                            <option value="Michigan">Michigan</option>
                            <option value="Minnestoa">Minnestoa</option>
                            <option value="Mississippi">Mississippi</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </select>

                        <label htmlFor="name" className="col-xs-12">ZipCode</label>
                        <input name="name" type="text" id="zipcode" className="col-xs-12 " />

                        <label htmlFor="name" className="col-xs-12">Establishment Phone #</label>
                        <input name="name" type="text" id="estphonenumber" className="col-xs-12 " />

                        <label htmlFor="sqfeet">Approxiamate Size of Public Space (Sq Feet)</label>
                        <input type="number" id="sqfeet" name="tentacles" min="1" max="100,001" className="col-xs-12 "></input>

                        <label htmlFor="numberofworkers">Max # of Workers at Once</label>
                        <input type="number" id="workers" name="tentacles" min="1" max="999" className="col-xs-12 "></input>
                    

                    </div>
                    <div className="row">
                        <button className="col-xs-8 col-xs-offset-2 estsignupbutton" type="button" onClick={submitData}>Let's do This!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EstablishmentSignUp;