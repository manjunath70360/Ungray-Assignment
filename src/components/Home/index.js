import {Component} from "react"


import Dashboard from "../Dashboard/index";
import SalesChart from "../Saleschart/index";
import TopProducts from "../TopProducts/index";
import Feedback from "../Feedback/index";
import CustomersByDevice from "../CustomerByDevice/index";


import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { TiFlowChildren } from "react-icons/ti";
import { BiBarChartAlt2 } from "react-icons/bi";
import { LuPlug2 } from "react-icons/lu";
import { TfiViewListAlt } from "react-icons/tfi";

import { FaCubes } from "react-icons/fa";


import { Button } from "antd";


import { Progress, Divider } from "antd";

import "../css/index.css"





class Home extends Component{


  render(){

    return(
  <div className="app_container">
      <div className="right_side">
      <div>
      <div className="logo">
        <FaCubes className="logo-icon"/>
              <h1 className="name-logo">Salesway</h1>
        </div>
        <div className="side_name">
        <IoSettingsOutline />
              <h1 className="name">Settings</h1>
        </div>
        <div className="side_name">
        <MdOutlineAccountCircle />
              <h1 className="name">Team</h1>
        </div>
        <p className="menu">MENU</p>
        
          <div className="side-name-active">
          <MdDashboard className="icon"/>
            <h1 className="name">Dashboard</h1>
          </div>
          <div className="side_name">
          <BiBarChartAlt2 />
            <h1 className="name active-name">Campaigns</h1>
          </div>
          <div className="side_name">
          <TiFlowChildren />
            <h1 className="name">Flows</h1>
          </div>
          <div className="side_name">
          <LuPlug2 />
            <h1 className="name">Integrations</h1>
          </div>
          <div className="side_name">
          <TfiViewListAlt />
            <h1 className="name">Customers</h1>
          </div>
        

      </div>
        <div className="account">
        <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1712381030/IMG_20210520_145412_ylrqi8.jpg" className="img" alt="profile" />
          <h1 className="name">Manjunath</h1>
        </div>
      </div>

    <div className="content">
        <div className="middle">
                <div className="side-name-options">
                  <h1 className="side-header">Dashboard</h1>
                  <div className="options">
                    <p className="compare">Compare to</p>
                    <select id="dropdown">
                    <option value="Last Year" selected>Last Year</option>
                    <option value="option2">This Year</option>
                    <option value="option3">Last Six Months</option>
                    <option value="option4">Last 2 Years</option>
                  </select>
                  </div>
                </div>

                <div className="card-container">
                   <Dashboard />
                </div>
          
                <div className="side-name-options">
                  <h1 className="side-header">Comparison</h1>
                  <select id="dropdown">
                    <option value="Last Year">Last Year</option>
                    <option value="option2">This Year</option>
                    <option value="option3" selected>6 Months</option>
                    <option value="option4">3 Months</option>
                  </select>
                </div>

                <div className="component_two">
              <SalesChart />
            </div>


            <div className="side-name-options">
                  <h1 className="side-header">Top Products</h1>
                  <select id="dropdown">
                    <option value="Last Year">Full results</option>
                  </select>
                </div>
                        <div className="component_six_table">
                         <TopProducts />
                        </div>
              </div>
        <div className="left_side">

                  <div className="component">
                      <div className="reader">
                      <Progress type="dashboard" percent={78}/>
                      <p style={{ color: "gray", textAlign: "center" }}>of 100 points</p>
                      
                      </div>
                      <Divider />
                      <h5><b>You're good!</b></h5>
                      <p style={{ color: "gray" }}>
                        Your sales performance score is better than 80% other users
                      </p>
                      <Button style={{ borderRadius: "20px" }}>
                        <strong>Improve your score</strong>
                      </Button>
                  </div>

                  <CustomersByDevice />
                      
                <Feedback />

         </div>
    </div>

      
 </div>
    )
  }
}

export default Home;