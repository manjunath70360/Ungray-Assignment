import React from 'react';
import { Row, Col } from "antd";
import ProgressBar from "react-bootstrap/ProgressBar";

import "../css/index.css";

const Feedback = () => {
  return (
    <div className="component">
    <p className="side_para">Community feedback</p>
    <h1 className="side-headers">Mostly positive</h1>
    <ProgressBar>
  <ProgressBar variant="danger" now={16} key={1} />
  <ProgressBar variant="warning" now={34} key={2} />
  <ProgressBar variant="success" now={50} key={3} />
</ProgressBar>
<Row
 className="row-progress"
>
  <Col className="col">
    <p>Negative</p>
    <h6>12</h6>
  </Col>
  <Col className="col">
    <p>Neutral</p>
    <h6>34</h6>
  </Col>
  <Col className="col">
    <p>Positive</p>
    <h6>134</h6>
  </Col>
</Row>

    </div>   
  );
}

export default Feedback;
