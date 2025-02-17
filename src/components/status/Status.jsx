import React from "react";
import { Form } from "react-bootstrap";
import viewIcon from "../assets/view.png";
import deleteIcon from "../assets/delete.png";
import rightIcon from "../assets/right.png";
import wrongIcon from "../assets/cancel.png";
import search from "../assets/search.png";
import sort from "../assets/sort.png";
import frontIcon from "../assets/front.png";
import backIcon from "../assets/back.png";
import forwardIcon from "../assets/forward.png";
import backwardIcon from "../assets/backward.png";
import "./status.scss"; 

function Status() {
  return (
    <div className="status-main">
      <div className="top-section">
        <div className="left-section">
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search User"
            />
            <img src={search} alt="Search" className="search-icon" />
          </div>
        </div>

        <div className="right-section"></div>
      </div>

      <div className="table">
        <div className="table-headings">
          <div>
            <p className="heading-text">Sr. No</p>
          </div>
          <div>
            <p className="heading-text">
              Listener Name <img className="sort" src={sort} alt="Sort Icon" />
            </p>
          </div>
          <div>
            <p className="heading-text">Upload Time</p>
          </div>
         
          <div>
            <p className="heading-text">Action</p>
          </div>
        </div>

        <div className="table-body">
          <div>
            <p className="heading-text">01</p>
          </div>
          <div>
            <p className="heading-text">Mona Tina</p>
          </div>
          <div>
            <p className="heading-text">10/12/2021, 04:24 am</p>
          </div>
          
          <div>
            <div className="actions">
              <img src={viewIcon} alt="View Icon" />
              <img src={rightIcon} alt="Right Icon" />
              <img src={wrongIcon} alt="Wrong Icon" />
              <img src={deleteIcon} alt="Delete Icon" />
            </div>
          </div>
        </div>

        <div className="pagination">
          <div className="pagination-dropdown">
            <p>Items Per Pages:</p>{" "}
            <Form.Select aria-label="Items Per Page">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </Form.Select>{" "}
          </div>
          <div className="pagination-details">
            <div className="pagination-numbers">
              <p>1</p>-<p>10</p>
              <p>of</p>
              <p>90</p>
            </div>
            <div className="pagination-controls">
              <img src={backwardIcon} alt="Backward Icon" />
              <img src={backIcon} alt="Back Icon" />
              <img src={frontIcon} alt="Front Icon" />
              <img src={forwardIcon} alt="Forward Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
