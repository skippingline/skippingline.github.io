import React from 'react';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00"],
  datasets: [
    {
      data: [47, 43, 33, 35, 42, 35],
      fill: true,
      backgroundColor: "rgba(203,84,247,0.2)",
      borderColor: "rgba(203,84,247,1)"
    }
  ]
};

const legend = {
  display: false,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 18,
  }
};

const options = {
  title: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
        }
      }
    ]
  }
};

export default function EstablishmentHome() {
  return (
    <div className="container">
        <div className="row center-xs EstablishmentHomeBoxes">
            <div className="col-xs-12
                            col-sm-8
                            col-md-12">

                    <div className="EstablishmentHomeIcon row center-xs">
                            <svg viewBox="0 0 220 220">
	                            <circle className="establishmentcircle" cx="110" cy="75" r="65" stroke="#2BFC7F" stroke-width="8" fill-opacity="0" />
                                <path id="curve" d="M15,110a95,95 0 1,0 190,0a95,95 0 1,0 -190,0" fill="none"/>
                                <text x="50%" y="42%" text-anchor="middle" fontSize="55px" fill="#2BFC7F">97%</text>
                            </svg>
                    </div>
                    <div className="EstablishmentHomeCapacity row center-xs">
                      <label>3 Under Max</label>
                    </div>
            </div>

            <div className="col-xs-12
                            col-sm-8
                            col-md-6
                            col-lg-6">

                    <div className="EstablishmentHomeChart">
                        <Line data={data} legend={legend} options={options} />
                    </div> 
            </div>
        
        </div>
    </div>
  );
}