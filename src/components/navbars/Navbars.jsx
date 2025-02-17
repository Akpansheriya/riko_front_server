import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.scss";
import drawer from "../assets/drawer.png";
import userPlus from "../assets/userplus.png";
import mailbox from "../assets/mailbox.png";
import notification from "../assets/notification.png";
import avatar from "../assets/avatar.png";
import downArrow from "../assets/bottom-arrow.png";
import { useLocation } from "react-router-dom";
function Navbars({toggleSidebar}) {
  const location = useLocation();
  return (
    <div className="navbar-main">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
        
          <Navbar.Brand href="#home">
            <img src={drawer} alt={drawer}  onClick={toggleSidebar} />
            <p>Dashboard</p>
          </Navbar.Brand>

          <Nav className="right-section">
            <img src={userPlus} alt={userPlus} />
            <img src={mailbox} alt={mailbox} />
            <img src={notification} alt={notification} />
            <div className="avatar">
              <div className="user-profile">
                {" "}
                <img className="avatar-image" src={avatar} alt={avatar} />{" "}
                <div className="user-name">
                  {" "}
                  <p className="name">Lorem Ipsum</p>{" "}
                  <p className="role">Admin</p>
                </div>
              </div>
              <img className="down-arrow-img" src={downArrow} alt={downArrow} />
            </div>
          </Nav>
          
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
