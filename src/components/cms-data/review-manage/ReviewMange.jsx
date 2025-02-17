import React from "react";
import { Button, Form } from "react-bootstrap";
import "./reviewManage.scss";
import viewIcon from "../../assets/view.png";
import deleteicon from "../../assets/delete.png";
import sort from "../../assets/sort.png";
import search from "../../assets/search.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
function Reviewmanage() {
  return (
    <div className="review-main">
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
            <p className="heading-text">Average ratings</p>
          </div>
          <div>
            <p className="heading-text">Total Review</p>
          </div>
          <div>
            <p className="heading-text">Date</p>
          </div>
          <div>
            <p className="heading-text">Comment</p>
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
            <p className="heading-text">4.8</p>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
          <div>
            <p className="heading-text">12</p>
          </div>
          <div>
            <p className="heading-text">21/02/2021, 4:16 pm</p>
          </div>
          <div>
            <p className="heading-text">Great</p>
          </div>
          <div>
            <div className="actions">
              <img src={viewIcon} alt={viewIcon} />
              <img src={deleteicon} alt={deleteicon} />
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

export default Reviewmanage;
