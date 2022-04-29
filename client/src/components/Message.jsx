import React from "react";
import { Row, Card } from "react-bootstrap";

export const Message = props => {
  return (
    <Row style={{ marginRight: "0px" }}>
      <Card
        style={{
          borderRadius: "26px",
          border: "1px solid #87b1db",
          width: "80%",
          alignSelf: "center",
          margin: "0 0 10px " + props.marginLeft,
          backgroundColor: props.backgroundColor,
          float: "right",
          right: "0px",
        }}
      >
        <Card.Body>
          <h6 style={{ float: "right" }}>{props.timeStamp}</h6>
          <Card.Subtitle>
            <b>{props.sender}</b>
          </Card.Subtitle>
          <Card.Text>{props.data}</Card.Text>
        </Card.Body>
      </Card>
    </Row>
  );
}
