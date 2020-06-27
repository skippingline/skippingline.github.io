import React from 'react';
import { Line } from "react-chartjs-2";

const data = {
  labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "1:00"],
  datasets: [
    {
      data: [33, 38, 33, 27, 42, 53],
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
                            col-md-6">

                    <div className="EstablishmentHomeIcon">
                        <span>Icon Here</span>
                    </div>
            </div>

            <div className="col-xs-12
                            col-sm-8
                            col-md-6">

                    <div className="EstablishmentHomeChart">
                        <Line data={data} legend={legend} options={options} />
                    </div> 
            </div>
        
        </div>
    </div>
  );
}