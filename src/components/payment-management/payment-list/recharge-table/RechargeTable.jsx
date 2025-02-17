import React from "react";
import "./recharge.scss";
import sort from "../../../assets/sort.png";
import frontIcon from "../../../assets/front.png";
import backIcon from "../../../assets/back.png";
import forwardIcon from "../../../assets/forward.png";
import backwardIcon from "../../../assets/backward.png";
import { Form } from "react-bootstrap";
function RechargeTable() {
  return (
    <div className="recharge-main">
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
            Payment ID <img className="sort" src={sort} alt={sort} />
          </p>
        </div>
        <div>
          <p className="heading-text">
            Name <img className="sort" src={sort} alt={sort} />
          </p>
        </div>
        <div>
          <p className="heading-text">
            Recharge Amount <img className="sort" src={sort} alt={sort} />
          </p>
        </div>
        <div>
          <p className="heading-text">
            Net Recharge <img className="sort" src={sort} alt={sort} />
          </p>
        </div>
        <div>
          <p className="heading-text">
            GST (₹) <img className="sort" src={sort} alt={sort} />
          </p>
        </div>
        <div>
          <p className="heading-text">Country</p>
        </div>
        <div>
          <p className="heading-text">State</p>
        </div>
        <div>
          <p className="heading-text">
            Transaction Status <img className="sort" src={sort} alt={sort} />
          </p>
        </div>
        <div>
          <p className="heading-text extra-space">
            Transaction Date
            <img className="sort" src={sort} alt={sort} />
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
          <p className="heading-text">pay_fs6gdf454dgsgsdf</p>
        </div>
        <div>
          <p className="heading-text">Anil</p>
        </div>
        <div>
          <p className="heading-text">396.00</p>
        </div>
        <div>
          <p className="heading-text">164.00</p>
        </div>
        <div>
          <p className="heading-text">36.00</p>
        </div>
        <div>
          <p className="heading-text">India</p>
        </div>
        <div>
          <p className="heading-text">Maharashtra</p>
        </div>
        <div>
          <p className="heading-text green-text">Success</p>
        </div>
        <div>
          <p className="heading-text extra-space">10/12/2021, 04:24 am</p>
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
  );
}

export default RechargeTable;
