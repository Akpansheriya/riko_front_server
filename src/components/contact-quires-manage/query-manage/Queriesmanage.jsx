import React from "react";
import { Button, Form } from "react-bootstrap";
import "./queriesManage.scss";
import viewIcon from "../../assets/view.png";
import replyIcon from "../../assets/reply.png";
import search from "../../assets/search.png";
import sort from "../../assets/sort.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
function QueriesManage() {
  return (
    <div className="gift-management-main">
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
         
          <Button className="edit-btn">Listener</Button>
          <Button className="edit-btn">User</Button>
        </div>
      </div>
      <div className="table">
        <div className="table-headings">
          <div>
            <p className="heading-text">Sr. No</p>
          </div>
          <div>
            <p className="heading-text">
              Queries <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">Submitted By</p>
          </div>
          <div>
            <p className="heading-text">Submitted On</p>
          </div>

          <div>
            <p className="heading-text">Status</p>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">01</p>
          </div>
          <div>
            <p className="heading-text">Test Queries?</p>
          </div>
          <div>
            <p className="heading-text">Roman</p>
          </div>
          
          <div>
            <p className="heading-text">
             
             10/12/2021
            </p>
          </div>
         
          <div>
            <div className="actions">
              <img src={viewIcon} alt={viewIcon} />{" "}
              <img src={replyIcon} alt={replyIcon} />
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

export default QueriesManage;
