import React from "react";
import { Button, Modal } from "react-bootstrap";
import alertIcon from "../../assets/alert.png";
import "./exportModal.scss";
function ExportExcel(props) {
  return (
    <div className="excel-modal">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <p className="export-modal-title">Export Users List</p>
        </Modal.Header>
        <Modal.Body>
          <img src={alertIcon} alt={alertIcon} />
          <p>Are you sure export your all users data in Excel Format?</p>
          <p className="dark-text">Are you sure?</p>
          <div className="excel-modal-btns">
            <Button className="red-btn">No</Button>
            <Button className="green-btn">Yes</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ExportExcel;
