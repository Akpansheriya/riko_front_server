import React from "react";
import { Button, Form } from "react-bootstrap";
import "./setting.scss";
import editIcon from "../assets/edit.png";
import sort from "../assets/sort.png";
import search from "../assets/search.png";

function Setting() {
  return (
    <div className="setting-main">
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
              Title <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">Value</p>
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
            <p className="heading-text">site_name</p>
          </div>

          <div>
            <p className="heading-text">Emotional Touch</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">
              listener vacancy{" "}
              <span>(0 for close vacancy, 1 for open vacancy)</span>
            </p>
          </div>

          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">user_welcome_bonus</p>
          </div>

          <div>
            <p className="heading-text">0</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">
              referral_amount <span>(User)</span>
            </p>
          </div>

          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">
            referral_percentage <span> (listener)</span>
            </p>
          </div>

          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">
            android_version
            </p>
          </div>

          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">
            ios_version
            </p>
          </div>

          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>
        <div className="table-body">
          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <p className="heading-text">
            upi_option  <span> (0 for disable upi edit option, 1 for enable upi edit option)</span>
            </p>
          </div>

          <div>
            <p className="heading-text">1</p>
          </div>

          <div>
            <div className="actions">
              <img src={editIcon} alt={editIcon} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Setting;
