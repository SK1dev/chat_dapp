import React from "react";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export function BlockMessages(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="BlockMessages"
      style={{
        position: "absolute",
        bottom: "0px",
        padding: "10px 45px 0 45px",
        margin: "0 95px 0 0",
        width: "97%",
      }}
    >
      <Button variant="success" className="mb-2" onClick={handleShow}>
        + Block
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Block Messages </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              required
              id="addPublicKey"
              size="text"
              type="text"
              placeholder="Enter Friends Public Key"
            />
            <br />
            <Form.Control
              required
              id="addName"
              size="text"
              type="text"
              placeholder="Name"
            />
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.addHandler(
                document.getElementById("addName").value,
                document.getElementById("addPublicKey").value
              );
              handleClose();
            }}
          >
            Block
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
