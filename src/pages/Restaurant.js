import React from 'react';

const Restaurant = () => {
    return(
        <fragment>
        <div className="row between-xs restauranttitle">
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="45px"> <path id="addIcon" d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" /></svg></span>
        </div>

        <div className="containerrestaurant">
        <div className="row between-xs restaurantwhatshot">
            <span>What's Hot</span>
        </div>

        <div className="container">
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
    </div>
        
    <select className="restaurantdropdown" id="restaurants">
        <option value="All">All</option>
        <option value="Mexican">Mexican</option>
        <option value="Mexican">Mexican</option>
        <option value="Mexican">Mexican</option>
        <option value="Mexican">Mexican</option>
    </select>
    </fragment>
    );

}

export default Restaurant;