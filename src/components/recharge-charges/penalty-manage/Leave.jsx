import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap"; // Use Form from react-bootstrap

function Leave() {
  return (
    <div>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Number of Leaves:</Form.Label>
            <Form.Control type="number" placeholder="Enter Number of Leaves" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDetails">
            <Form.Label>Penalty per Leave Amount (Rs.):</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Penalty per Leave Amount (Rs.):"
            />
          </Form.Group>
        </Row>

        <div className="submit">
          <Button>Save</Button>
        </div>
      </Form>
    </div>
  );
}

export default Leave;
