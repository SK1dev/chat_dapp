import React from "react";
import { Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ChatCard = props => {
  return (
    <Row style={{ marginRight: "0px" }}>
      <Card
        style={{ width: "100%", alignSelf: "center", borderRadius: "26px", margin: "10px 10px 0 25px", border: "1px solid #87b1db"}}
        onClick={() => {
          props.getMessages(props.publicKey);
        }}
      >
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Subtitle>
            {" "}
            {props.publicKey.length > 20
              ? props.publicKey.substring(0, 20) + " ..."
              : props.publicKey}{" "}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Row>
  );
}
