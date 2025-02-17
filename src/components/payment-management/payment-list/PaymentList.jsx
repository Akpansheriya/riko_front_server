import React, { useState } from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import DatePicker from '../../user-management/user-list/date-picker/DatePicker'
import search from "../../assets/search.png";
import "./payment.scss"
import RechargeTable from './recharge-table/RechargeTable';
import Gift from './gift/Gift';
import Services from './services/Services';
import Payout from './payout/Payout';
function PaymentList() {
    const [modalShow, setModalShow] = useState(false);
    const [key, setKey] = useState('Recharge');
  return (
    <div className="payment-main">
    {/* Top Section */}
    <div className="top-section">
      <div className="left-section">
        <Button onClick={() => alert("Excel button clicked!")}>Excel</Button>
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
        {/* Tabs in Top Section */}
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)} // Set the selected tab key
          className="tabs"
        >
          <Tab eventKey="Recharge" title="Recharge"></Tab>
          <Tab eventKey="Gift" title="Gift"></Tab>
          <Tab eventKey="Services" title="Services"></Tab>
          <Tab eventKey="Payout" title="Payout"></Tab>
        </Tabs>
        <DatePicker />
      </div>
    </div>

    {/* Tab Content in Table Section */}
    <div className="table">
      {key === "Recharge" && (
        <div className="tab-content">
        <RechargeTable/>
        </div>
      )}
      {key === "Gift" && (
        <div className="tab-content">
         <Gift/>
        </div>
      )}
      {key === "Services" && (
        <div className="tab-content">
         <Services/>
        </div>
      )}
       {key === "Payout" && (
        <div className="tab-content">
         <Payout/>
        </div>
      )}
    </div>
  </div>
  )
}

export default PaymentList