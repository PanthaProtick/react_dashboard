import React from "react";
import { Navbar, Container } from "react-bootstrap";

function TopNavbar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="shadow-sm mb-4 border-bottom border-secondary"
    >
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold text-primary">
          🚀 Dashboard
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
