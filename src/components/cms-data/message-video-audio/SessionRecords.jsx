import React from "react";
import { Button, Form } from "react-bootstrap";
import "./sessionManage.scss";
import viewIcon from "../../assets/view.png";
import editIcon from "../../assets/edit.png";
import sort from "../../assets/sort.png";
import search from "../../assets/search.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
function SessionManage() {
  return (
    <div className="session-main">
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
            <p className="heading-text">Sr.No</p>
          </div>

          <div>
            <p className="heading-text">
              User Name <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Listener Name <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">Service</p>
          </div>
          <div>
            <p className="heading-text">Date</p>
          </div>
          <div>
            <p className="heading-text">Calling Time</p>
          </div>
          <div>
            <p className="heading-text">Fees</p>
          </div>
          <div>
            <p className="heading-text">Payment</p>
          </div>
          <div>
            <p className="heading-text">Action</p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">Andrew Monark</p>
          </div>

          <div>
            <p className="heading-text">Vimal patel</p>
          </div>

          <div>
            <p className="heading-text">Call</p>
           
          </div>
          <div>
            <p className="heading-text">12/11/2024,4:15pm</p>
          </div>
          <div>
            <p className="heading-text">10 Min</p>
          </div>
          <div>
            <p className="heading-text">40.00</p>
          </div>
          <div>
            <p className="heading-text green-text">Success</p>
          </div>
          <div>
            <div className="actions">
            <img src={editIcon} alt={editIcon} />
              <img src={viewIcon} alt={viewIcon} />
            
            </div>
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

export default SessionManage;
