import React from "react";
import { Navbar } from "react-bootstrap";

export function NavBar(props) {
  return (
    <Navbar style={{backgroundColor:"#252728", color: "#fff"}} >
      <Navbar.Brand style={{color: "#fff"}} href="#home">Dapp4Chat</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <button
            style={{ display: props.showButton }}
            className="metamask_btn"
            onClick={async () => {
              props.login();
            }}
          >
            Connect to Metamask
          </button>
          <div className="signed_in_as"
            style={{ display: props.showButton === "none" ? "block" : "none" }}
          >
            <p>Signed in as:
            </p>
            <p>{props.username}</p>
          </div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
