import React from "react";
import "./dashboard.scss";
import { details } from "./dashboardCardsDetails.js";
import { Col, Form, Row } from "react-bootstrap";
import DashboardCards from "../common/dashboard-card/DashboardCards";
import Graph from "./graph/Graph.jsx";
import Circle from "./circle/Circle.jsx";
function Dashboard() {
  return (
    <div className="dashboard-main">
      <h6 className="heading">Welcome back, Json Taylor !</h6>
      <Row cols="auto" className="rows-class">
        {details.map((ele) => (
          <Col sm={12} md={3} lg={3}>
            {" "}
            <DashboardCards
              title={ele.title}
              amount={ele.amount}
              percentage={ele.percentage}
              icon={ele.icon}
              growth={ele.growth}
              growthClass={ele.growthClass}
              backgroundClass={ele.backgroundClass}
              type="dashboard"
            />
          </Col>
        ))}
      </Row>
<Row>
  <Col sm={12} md={6} lg={6}> <div className="table">
        <div className="topbar space">
          <p>Traffic Via Website</p>
          <Form.Select  className="traffic-dropdown" aria-label="Default select example">
            <option>Sort By</option>
            <option value="1">Monthly</option>
            <option value="2">Yearly</option>
            <option value="3">Daily</option>
          </Form.Select>
        </div>
        <div className="circle-graph">
          <p>In the Your system, you have 62% Traffic via Website in one Week. Also you sort this data in Monthly and Yearly Base. </p>
      <Circle percentage={75} color="#2AA33D"/>
    </div>
       
      </div></Col>
      <Col sm={12} md={6} lg={6}> <div className="table">
        <div className="topbar space">
          <p>Traffic Via Application</p>
          <Form.Select className="traffic-dropdown" aria-label="Default select example">
            <option>Sort By</option>
            <option value="1">Monthly</option>
            <option value="2">Yearly</option>
            <option value="3">Daily</option>
          </Form.Select>
        </div>
        <div className="circle-graph">
          <p>In the Your system, you have 62% Traffic via Website in one Week. Also you sort this data in Monthly and Yearly Base. </p>
      <Circle percentage={75} color="#843C96" />
    </div>
      </div></Col>
</Row>
      <div className="table">
        <div className="topbar">
          <p>Traffic Analysis:</p>
          <Form.Select aria-label="Default select example">
            <option>Sort By</option>
            <option value="1">Monthly</option>
            <option value="2">Yearly</option>
            <option value="3">Daily</option>
          </Form.Select>
        </div>
        <Graph />
      </div>
    </div>
  );
}

export default Dashboard;
