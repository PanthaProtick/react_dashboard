import React from "react";
import { Navbar, Container } from "react-bootstrap";

function TopNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm mb-4 border-bottom">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold text-primary">
          🚀 Dashboard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
