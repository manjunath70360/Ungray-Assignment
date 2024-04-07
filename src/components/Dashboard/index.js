import React from 'react';

import { PiChartLineUp, PiChartLineDownFill } from "react-icons/pi";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css";

const cardData = [
    {
      title: "Purchases",
      value: "$4,294",
      tagColor: "green",
      tagBgColor: "#bee8be",
      tagContent: "+32%",
      icon: <PiChartLineUp className="graph-icon"/>,
    },
    {
      title: "Revenue",
      value: "$322,3k",
      tagColor: "green",
      tagBgColor: "#bee8be",
      tagContent: "+49%",
      icon: <PiChartLineUp className="graph-icon"/>,
    },
    {
      title: "Refund",
      value: "$8,2k",
      tagColor: "brown",
      tagBgColor: "#fababa",
      tagContent: "+7%",
      icon: <PiChartLineDownFill className="graph-icon-brown"/>,
    },
  ];

const Dashboard = () => {


  return (
    <>
     {cardData.map(eachItem =>(
                        <div className="card">
                          <p className="card-name">{eachItem.title}</p>
                          <div className="num-bar">
                            <h1 className="num">{eachItem.value}</h1>
                            <div className={eachItem.tagColor}>
                              <p className={`${eachItem.tagColor}-num`}>{eachItem.tagContent}</p>
                              {eachItem.icon}
                            </div>
                          </div>
                        </div>
                    )
                    )}
    </>
  );
}

export default Dashboard;
