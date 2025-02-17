import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./revenueMis.scss";
import editIcon from "../../assets/pencil.png";
import deleteIcon from "../../assets/delete.png";
import search from "../../assets/search.png";
import sort from "../../assets/sort.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
function RevenueMis() {
   const [modalShow, setModalShow] = useState(false);
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
          <Button className="edit-btn">
            Call
          </Button>
          <Button className="edit-btn">
            Chat
          </Button>
          <Button className="edit-btn">VCall</Button>
          <Button className="edit-btn">Gift</Button>
        </div>
      </div>
      <div className="table">
        <div className="table-headings">
          <div>
            <p className="heading-text">Sr. No</p>
          </div>
          <div>
            <p className="heading-text">
              State Name
            </p>
          </div>
          <div>
            <p className="heading-text">Total Recharge</p>
          </div>
          <div>
            <p className="heading-text">Number of Users</p>
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
            <p className="heading-text">59,300.00</p>
          </div>
          
          <div>
            <p className="heading-text">
              120
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

export default RevenueMis;
