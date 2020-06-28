import React from 'react';

const Restaurant = () => {
    return (
        <div className="container">
            <div className="row center-xs restaurantheader
                            col-xs-12
                            col-sm-12
                            col-md-12">
                <select className="restaurantdropselect" id="restaurants">
                    <option value="Ready Right Now">Ready</option>
                    <option value="What's Trending">Trending</option>
                    <option value="All">All</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="45px" fill="#DE1A1A"> <path id="addIcon" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" /></svg>
            </div>

            <div className="row between-xs restaurantBoxes">
                <div className="col-xs-6
                                col-sm-4
                                col-md-3">
                    <div>
                        Image Here
                        </div>
                </div>
                <div className="col-xs-6
                                col-sm-4
                                col-md-3">
                    <div>
                        Image Here
                        </div>
                </div>
                <div className="col-xs-6
                                col-sm-4
                                col-md-3">
                    <div>
                        Image Here
                        </div>
                </div>
                <div className="col-xs-6
                                col-sm-4
                                col-md-3">
                    <div>
                        Image Here
                        </div>
                </div>
            </div>
        </div>
    );

}

export default Restaurant;