import React from 'react';

import { Row, Col } from "antd";


import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";


import "../css/index.css"



const CustomersByDevice = () => {
    const connectNulls = true;

    return(
    <div className="component">
                    <h1 className="side-headers">Customers by device</h1>
                    <Stack sx={{ width: "100%" }}>
                    <LineChart
                      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
                      series={[
                        {
                          data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
                        },
                        {
                          data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
                          connectNulls,
                          area: true,
                        },
                      ]}
                      height={180}
                      margin={{ top: 10, bottom: 15 }}
                    />
                    <Row
                      style={{
                        paddingTop: "10%",
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Col style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <h6 style={{fontSize:'12px',color:'gray'}}>
                          Web Sales&nbsp;
                          <div style={{ backgroundColor: "#02B2AF", width:'10px', height:'10px' }}></div>
                        </h6>
                        <h6 style={{fontSize:'12px'}}>1,304%</h6>
                      </Col>
                      <Col style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <h6 style={{fontSize:'12px',color:'gray'}}>
                          Offline selling&nbsp;
                          <div style={{ backgroundColor: "#2E96FF", width:'10px', height:'10px' }}></div>
                        </h6>
                        <h6 style={{fontSize:'12px'}}>473%</h6>
                      </Col>
                    </Row>
                  </Stack>
                  </div>
    )
};

export default CustomersByDevice;
