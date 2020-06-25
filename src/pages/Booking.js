import React from 'react';

const Booking = () => {
    return (
            <div className="container">
                <div className="row center-xs bookingplace">
                    <label><h1>Name</h1><h3>Add</h3></label>
                </div>

                <div className="row between-xs bookingdatetime">
                    <label>Date</label>
                    <div>
                        <span>
                            <label>Time</label>
                        </span>
                    </div>
                </div>

                <div className="row between-xs bookingbutton">
                    <span><button type="button">Book Now</button></span>
                </div>

                <div className="row between-xs calendar">

                </div>
            </div>
    )
};

export default Booking;