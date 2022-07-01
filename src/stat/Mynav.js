import React from "react";

import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Button,
  Form,
} from "react-bootstrap";

const Mynav = () => {
  return (
    <div className="mynav">
      <Navbar className="nave" bg="dark" variant="dark">
        <img className="logo" src="./img/logo.png" alt=""></img>
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Yoga Bags</Nav.Link>
            <Nav.Link href="#features">Yoga Guides</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="seabut" variant="outline-dark">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Mynav;
