import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import upload from "../../assets/upload.png";
import "./addnotification.scss"; // Include your styles here

function AddNotification() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("File selected:", file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("File dropped:", file);
    }
  };

  return (
    <div className="add-notification-main">
      <div className="table">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Add Notification Title:</Form.Label>
              <Form.Control type="text" placeholder="Enter Notification Title" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDetails">
              <Form.Label>Notification Details:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Notification Details"
              />
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridImage">
            <Form.Label>Uploaded Notification Image:</Form.Label>
            <div
              className={`drop-zone ${isDragging ? "dragging" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <img src={upload} alt="Upload Icon" />
              {selectedFile ? (
                <p>{selectedFile.name}</p>
              ) : (
                <p>Drop files here or click to upload</p>
              )}
            </div>
          </Form.Group>
          <div className="submit"><Button>Add</Button></div>
        </Form>
      </div>
    </div>
  );
}

export default AddNotification;
