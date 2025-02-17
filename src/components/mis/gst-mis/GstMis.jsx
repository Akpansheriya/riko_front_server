import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./gstMis.scss";
import search from "../../assets/search.png";
import right from "../../assets/calendar-right.png";
import left from "../../assets/calendar-left.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
import DatePicker from "../../user-management/user-list/date-picker/DatePicker";
function GstMis() {
  const [modalShow, setModalShow] = useState(false);
  const [viewMode, setViewMode] = useState("month");
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeDate = (direction) => {
    const updatedDate = new Date(currentDate);
    if (viewMode === "month") {
      updatedDate.setMonth(
        currentDate.getMonth() + (direction === "left" ? -1 : 1)
      );
    } else if (viewMode === "year") {
      updatedDate.setFullYear(
        currentDate.getFullYear() + (direction === "left" ? -1 : 1)
      );
    }
    setCurrentDate(updatedDate);
  };

  const displayDate = () => {
    if (viewMode === "month") {
      return currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
    } else if (viewMode === "year") {
      return currentDate.getFullYear();
    }
  };
  return (
    <div className="revenue-mis-main">
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
          <Button className="edit-btn">Recharge</Button>
          <Button className="edit-btn">Gift</Button>
        </div>
      </div>
      <div className="table">
      <div className="calendar">
      <div className="calendar-controls">
        <Button className="left" onClick={() => changeDate("left")}>
          <img src={left} alt="Left Arrow" />
        </Button>
     
        <Button className="right" onClick={() => changeDate("right")}>
          <img src={right} alt="Right Arrow" />
        </Button>
      </div>
      <p>{displayDate()}</p>
      <div className="triggered-tabs">
        <Button
          className={`tabs-button ${viewMode === "month" ? "active" : ""}`}
          onClick={() => setViewMode("month")}
        >
          Month
        </Button>
        <Button
          className={`tabs-button ${viewMode === "year" ? "active" : ""}`}
          onClick={() => setViewMode("year")}
        >
          Yearly
        </Button>
      </div>
    </div>
        <div className="table-headings">
          <div>
            <p className="heading-text">Sr. No</p>
          </div>
          <div>
            <p className="heading-text">State Name</p>
          </div>
          <div>
            <p className="heading-text">Total GST (₹) 18%</p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">01</p>
          </div>
          <div>
            <p className="heading-text">Andhra Pradesh</p>
          </div>
          <div>
            <p className="heading-text">120</p>
          </div>
        </div>

        <div className="pagination">
          <div className="pagination-dropdown">
            <p>Items Per Pages:</p>{" "}
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">5</option>
              <option value="2">10</option>
              <option value="3">15</option>
              <option value="2">20</option>
              <option value="3">25</option>
              <option value="3">30</option>
            </Form.Select>{" "}
          </div>
          <div className="pagination-details">
            <div className="pagination-numbers">
              <p>1</p>-<p>10</p>
              <p>of</p>
              <p>90</p>
            </div>
            <div className="pagination-controls">
              <img src={backwardIcon} alt={backwardIcon} />
              <img src={backIcon} alt={backIcon} />
              <img src={frontIcon} alt={frontIcon} />
              <img src={forwardIcon} alt={forwardIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GstMis;
