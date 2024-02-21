import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="../../../Logo.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          />
          <Nav
            className="me-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          />
          <Nav
            className="me-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav
              className="me-auto my-2 my-lg-0 text-center"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/galeria" className="me-6 link-item">
                Galería
              </Nav.Link>
              <Nav.Link href="#/contacto" className="me-6 link-item">
                Contacto
              </Nav.Link>
              <Nav.Link href="#/venta" className="link-item">
                Venta
              </Nav.Link>
            </Nav>

            {/* <NavDropdown title="Idioma" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Inglés</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Haz una búsqueda"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              className="custom-search-button custom-search-button-header"
            >
              Buscar
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
