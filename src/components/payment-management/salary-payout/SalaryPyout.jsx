import React, { useState } from 'react'
import "./salaryPayout.scss"
import { Button, Form } from "react-bootstrap";
import search from "../../assets/search.png";
import sort from "../../assets/sort.png";
import salaryIcon from "../../assets/salary.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";

import ExportExcel from "../../common/export-modal/ExportExcel";
function SalaryPyout() {
 const [modalShow, setModalShow] = useState(false);
  return (
    <div className="salary-payout-main">
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
       
      </div>
      <div className="table">
        <div className="table-headings">
          <div>
            <p className="heading-text">Sr. No</p>
          </div>
          <div>
            <p className="heading-text">
              Full Name <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">Email ID</p>
          </div>
          <div>
            <p className="heading-text">Bank Account Number</p>
          </div>
          <div>
            <p className="heading-text">NEFT/RTGS</p>
          </div>
          <div>
            <p className="heading-text">UPI ID</p>
          </div>
          <div>
            <p className="heading-text">
              Payout Amount <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Net Payout Amount <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Leave Penalty <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
         
          <div>
            <p className="heading-text">Session Missed Penalty</p>
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
            <p className="heading-text">Andrew Roman Gllen</p>
          </div>
          <div>
            <p className="heading-text">andre...@gmail.com</p>
          </div>
          <div>
            <p className="heading-text">12345678912</p>
          </div>
          <div>
            <p className="heading-text">7686AHHH876876876</p>
          </div>
          <div>
            <p className="heading-text">9999999999@okhdfc</p>
          </div>
          <div>
            <p className="heading-text">188.00</p>
          </div>
          <div>
            <p className="heading-text red-text">-911.00</p>
          </div>
          <div>
            <p className="heading-text">
            1200.00
            </p>
          </div>
          <div>
            <p className="heading-text green-text">0</p>
          </div>
          <div>
            <div className="actions">
              <img src={salaryIcon} alt={salaryIcon} />{" "}
             
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
      <ExportExcel show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default SalaryPyout