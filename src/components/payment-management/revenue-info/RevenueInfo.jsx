import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import search from "../../assets/search.png";
import "./revenue.scss";
import { details } from "./revenueCardDetails.js";
import DatePicker from "../../user-management/user-list/date-picker/DatePicker";
import ExportExcel from "../../common/export-modal/ExportExcel";
import DashboardCards from "../../common/dashboard-card/DashboardCards.jsx";

function RevenueInfo() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="revenue-main">
      <div className="top-section">
        <div className="left-section">
          <Button onClick={() => setModalShow(true)}>Excel</Button>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search User"
            />
            <img src={search} alt="Search" className="search-icon" />
          </div>
        </div>
        <div className="right-section">
          <DatePicker />
        </div>
      </div>
      <Row className="row-class">
        {details
          ? details.map((ele) => (
              <Col sm={12} md={6} lg={6}>
                <DashboardCards
                  title={ele.title}
                  amount={ele.amount}
                  icon={ele.icon}
                  growthClass={ele.growthClass}
                  backgroundClass={ele.backgroundClass}
                  type="revenue"
                />
              </Col>
            ))
          : ""}
      </Row>

      <ExportExcel show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default RevenueInfo;
