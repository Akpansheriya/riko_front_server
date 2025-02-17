import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./misSixty.scss";
import search from "../../assets/search.png";
import right from "../../assets/calendar-right.png";
import left from "../../assets/calendar-left.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";

function MisSixty() {
  const [viewMode, setViewMode] = useState("month"); // "week", "month", "year"
  const [currentDate, setCurrentDate] = useState(new Date()); // Tracks the selected date

  const getWeekRange = (date) => {
    const current = new Date(date);
    const firstDay = new Date(current.setDate(current.getDate() - current.getDay() + 1)); // Monday
    const lastDay = new Date(current.setDate(firstDay.getDate() + 6)); // Sunday

    return {
      start: firstDay,
      end: lastDay,
    };
  };

  const changeDate = (direction) => {
    const updatedDate = new Date(currentDate);
    if (viewMode === "week") {
      // Change the week
      updatedDate.setDate(
        currentDate.getDate() + (direction === "left" ? -7 : 7)
      );
    } else if (viewMode === "month") {
      // Change the month
      updatedDate.setMonth(
        currentDate.getMonth() + (direction === "left" ? -1 : 1)
      );
    } else if (viewMode === "year") {
      // Change the year
      updatedDate.setFullYear(
        currentDate.getFullYear() + (direction === "left" ? -1 : 1)
      );
    }
    setCurrentDate(updatedDate);
  };

  const displayDate = () => {
    if (viewMode === "week") {
      const { start, end } = getWeekRange(currentDate);
      const options = { day: "2-digit", month: "short", year: "numeric" };
      return `${start.toLocaleDateString("default", options)} – ${end.toLocaleDateString(
        "default",
        options
      )}`;
    } else if (viewMode === "month") {
      return currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric",
      }); // Example: September 2019
    } else if (viewMode === "year") {
      return currentDate.getFullYear(); // Example: 2019
    }
  };

  return (
    <div className="sixty-mis-main">
      <div className="table">
        {/* Calendar Controls */}
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
              className={`tabs-button ${viewMode === "week" ? "active" : ""}`}
              onClick={() => setViewMode("week")}
            >
              Week
            </Button>
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

        {/* Table Content */}
        <div className="table-headings">
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text">No. of Users</p>
          </div>
          <div>
            <p className="heading-text">Listener Income</p>
          </div>
          <div>
            <p className="heading-text">Admin Collection</p>
          </div>
          <div>
            <p className="heading-text">Total Recharge</p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">Monday</p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">Tuesday</p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">Wednesday</p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">Thursday</p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">Friday</p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">Saturday</p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
        </div>
        <div className="table-body">
          <div className="left-radius">
            <p className="heading-text ">Sunday</p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div>
            <p className="heading-text"></p>
          </div>
          <div className="right-radius">
            <p className="heading-text  "></p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default MisSixty;
