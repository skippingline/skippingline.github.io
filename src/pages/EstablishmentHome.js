import React from 'react';

const Calendar = () => {
    return (<div>yo</div>)
}


const EstablishmentHome = () => {
    return (
        <div className="container">
            <div><Calendar /></div>
            <div className="row center-xs esthomeheader">
                <label><h1>Circle Animation</h1><h3>#</h3></label>
            </div>

            <div className="row center-xs esthometime">
                <div>
                    <label>Time</label>
                </div>
            </div>

            <div className="row center-xs esthomechart">
                <span>Chart</span>
            </div>

            <div className="row center-xs esthomeidentifier">
                <span>Unique Identifier</span>
            </div>
        </div>

    )

};

export default EstablishmentHome;