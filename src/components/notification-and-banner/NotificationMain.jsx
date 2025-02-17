import React, { useState } from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import search from "../assets/search.png";
import "./notification.scss"
import Notification from './notification/Notification';
import Banner from './banner/Banner';

function NotificationMain() {
    const [modalShow, setModalShow] = useState(false);
    const [key, setKey] = useState('Notification');
  return (
    <div className="notification-main">
    {/* Top Section */}
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
        {/* Tabs in Top Section */}
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)} // Set the selected tab key
          className="tabs"
        >
          <Tab eventKey="Notification" title="Notification"></Tab>
          <Tab eventKey="Banner" title="Banner"></Tab>
          
        </Tabs>
      
      </div>
    </div>

    {/* Tab Content in Table Section */}
    <div className="table">
      {key === "Notification" && (
        <div className="tab-content">
      <Notification/>
        </div>
      )}
      {key === "Banner" && (
        <div className="tab-content">
        <Banner/>
        </div>
      )}
      
    </div>
  </div>
  )
}

export default NotificationMain