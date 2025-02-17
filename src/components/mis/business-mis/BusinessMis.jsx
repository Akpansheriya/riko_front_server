import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./businessMis.scss";
import editIcon from "../../assets/pencil.png";
import deleteIcon from "../../assets/delete.png";
import search from "../../assets/search.png";
import sort from "../../assets/sort.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
function BusinessMis() {
   const [modalShow, setModalShow] = useState(false);
  return (
    <div className="business-mis-main">
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
            Daily
          </Button>
          <Button className="edit-btn">
            Week
          </Button>
          <Button className="edit-btn">Month</Button>
          <Button className="edit-btn">Yearly</Button>
        </div>
      </div>
      <div className="table">
        <div className="table-headings">
          <div>
            <p className="heading-text">Date</p>
          </div>
          <div>
            <p className="heading-text">
              Number of Register User 
            </p>
          </div>
          <div>
            <p className="heading-text">Number of First Timer Recharge User</p>
          </div>
          <div>
            <p className="heading-text">Amount of First Recharge</p>
          </div>

          <div>
            <p className="heading-text">Number of Recharge</p>
          </div>
          <div>
            <p className="heading-text">Amount of Recharge</p>
          </div>
          <div>
            <p className="heading-text">Number of Gift</p>
          </div>
          <div>
            <p className="heading-text">Amount of Gift</p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">01/11/2021</p>
          </div>
          <div>
            <p className="heading-text">120.00</p>
          </div>
          <div>
            <p className="heading-text">12</p>
          </div>
          
          <div>
            <p className="heading-text">
              12,080.00
            </p>
          </div>
         
          <div>
           <p className="heading-text">600</p>
          </div>
          <div>
           <p className="heading-text">20,000.00</p>
          </div>
          <div>
           <p className="heading-text">120.00</p>
          </div>
          <div>
           <p className="heading-text">16,178.00</p>
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

export default BusinessMis;
