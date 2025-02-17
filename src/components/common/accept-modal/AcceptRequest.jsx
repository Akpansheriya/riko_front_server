import React from "react";
import { Button, Modal } from "react-bootstrap";
import alertIcon from "../../assets/alert.png";
import "./acceptRequest.scss";

function AcceptRequest({ show, onHide, onConfirm, userId ,userName,isMutationLoading}) {
  console.log("username",userName);
  
  return (
    <div className="account-request-modal">
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <p className="export-modal-title">Account Freeze</p>
        </Modal.Header>
        <Modal.Body>
          <img src={alertIcon} alt={alertIcon} />
          <p>You Are Attempting To Freeze User "{userName}" to your system?</p>
          <p className="dark-text">Are you sure?</p>
          <div className="excel-modal-btns">
            <Button className="red-btn" onClick={onHide}>No</Button>
            <Button className="green-btn" onClick={onConfirm}>{isMutationLoading ? "wait..." : "Yes"}</Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AcceptRequest;