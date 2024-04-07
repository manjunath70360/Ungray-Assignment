import React from 'react';
import { Row, Col } from "antd";
import { BarChart } from "@mui/x-charts";
import "../css/index.css";

const SalesChart = () => {
  return (
    <div className="component_two_chart">
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    },
                  ]}
                  series={[
                    { data: [10, 20, 15, 40, 20, 10],color: "#8aebff" },
                    { data: [20, 30, 18, 45, 35, 15],color: "#3437eb"  },
                  ]}
                  height={340}
                />
                <Row className="row-progress">
                  <Col>
                  <h6  style={{fontSize:'12px'}}><div style={{ backgroundColor: "#8aebff", height:"15px", width:"15px" }}></div>&nbsp; This year</h6>
                  </Col>
                  <Col>
                  <h6 style={{fontSize:'12px'}}><div style={{ backgroundColor: "#3437eb", height:"15px", width:"15px" }}></div>&nbsp; Last year</h6>
                
                  </Col>
                </Row>
              </div>
  );
}

export default SalesChart;
