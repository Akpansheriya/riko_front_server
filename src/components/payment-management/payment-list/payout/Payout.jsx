import React from 'react'
import sort from "../../../assets/sort.png";
import frontIcon from "../../../assets/front.png";
import backIcon from "../../../assets/back.png";
import forwardIcon from "../../../assets/forward.png";
import backwardIcon from "../../../assets/backward.png";
import viewIcon from "../../../assets/view.png";
import editIcon from "../../../assets/edit.png";
import { Form } from "react-bootstrap";
import "./payout.scss";
function Payout() {
  return (
    <div className="payout-main">
    <div className="table-headings">
      <div>
        <p className="heading-text">Sr. No</p>
      </div>
      <div>
        <p className="heading-text">
          Transition ID <img className="sort" src={sort} alt={sort} />
        </p>
      </div>
      <div>
        <p className="heading-text">
         Listener Name
          <img className="sort" src={sort} alt={sort} />
        </p>
      </div>
      <div>
        <p className="heading-text">
          Payout Amount <img className="sort" src={sort} alt={sort} />
        </p>
      </div>
      <div>
        <p className="heading-text">
          Description 
        </p>
      </div>
      <div>
        <p className="heading-text">
          Transaction Date <img className="sort" src={sort} alt={sort} />
        </p>
      </div>
      <div>
        <p className="heading-text">
         Action
        </p>
      </div>
      
      
    </div>
    <div className="table-body">
      <div>
        <p className="heading-text">01</p>
      </div>
      <div>
        <p className="heading-text">ABC_1213131</p>
      </div>
      <div>
        <p className="heading-text">Andrew Monark</p>
      </div>
      <div>
        <p className="heading-text">2058</p>
      </div>
      <div>
        <p className="heading-text">A Salary of Rs. 1768.00 has been paid by the admin, deducting 350 rupees penalty amount. </p>
      </div>
      <div>
        <p className="heading-text">10/12/2021, 04:24 am</p>
      </div>
      <div className="actions">
                   <img src={viewIcon} alt={viewIcon} />{" "}
                   <img src={editIcon} alt={editIcon} />{" "}
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
  )
}

export default Payout