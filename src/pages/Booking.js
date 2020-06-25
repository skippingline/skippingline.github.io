import React from 'react';
import { Route } from 'react-router-dom';

const Booking = () => {
    return (
            <div className="container">
                <div className="row between-xs bookingplace">
                    <label><h1>Name</h1>Name</label>
                </div>

                <div className="row between-xs bookingdatetime">
                    <label>Date</label>
                    <div>
                        <span>
                            <label>Time</label>
                            <button className="col-xs-8 col-xs-offset-2 bookingbutton" type="button">Book Now</button>
                        </span>
                    </div>
                </div>

                <div className="row center-xs calendar">

                </div>

            </div>
    )
};

export default Booking;