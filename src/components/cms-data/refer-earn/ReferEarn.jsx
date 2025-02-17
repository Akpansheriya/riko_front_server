import React from "react";
import { Button, Form } from "react-bootstrap";
import "./referEarn.scss";
import editIcon from "../../assets/edit.png";
import search from "../../assets/search.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
function ReferEarn() {
  return (
    <div className="refer-earn-main">
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

        <div className="right-section">
         
          <Button className="edit-btn">
            + Set Referral Credit Amount </Button>
        
        </div>
      </div>
      <div className="table">
        <div className="table-headings">
          <div>
            <p className="heading-text">User Name</p>
          </div>
         
          <div>
            <p className="heading-text">Referral Code</p>
          </div>
          <div>
            <p className="heading-text">Referral user</p>
          </div>
          <div>
            <p className="heading-text">Credits</p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">Mania Gia</p>
          </div>
         
          <div>
          <p className="heading-text">
               AVCdefr
              </p>
          </div>
         
          <div>
          <p className="heading-text">
               Vimal patel
              </p>
          </div>
          <div>
          <p className="heading-text">
              Credits
              </p>
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

export default ReferEarn;
