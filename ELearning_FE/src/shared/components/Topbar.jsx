import React from "react";
import { Navbar, Container, Nav, Form, InputGroup, Badge, Button } from "react-bootstrap";
import { FiBell, FiMail, FiSearch, FiMenu } from "react-icons/fi";

export default function Topbar({ onToggleSidebar }) {
  return (
    <Navbar bg="white" className="border-bottom py-3">
      <Container fluid="lg" className="gap-2">
        <Button
          variant="outline-secondary"
          className="d-lg-none"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FiMenu />
        </Button>

        <InputGroup className="bg-light rounded-pill px-2" style={{ maxWidth: 520 }}>
          <InputGroup.Text className="bg-transparent border-0">
            <FiSearch />
          </InputGroup.Text>
          <Form.Control placeholder="Search ..." className="bg-transparent border-0 shadow-none" />
        </InputGroup>

        <Nav className="ms-auto align-items-center gap-2">
          <Nav.Link className="text-secondary" href="#" aria-label="Mail">
            <FiMail />
          </Nav.Link>

          <Nav.Link className="text-secondary position-relative" href="#" aria-label="Notifications">
            <FiBell />
            <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle">
              3
            </Badge>
          </Nav.Link>

          <div className="d-flex align-items-center bg-light rounded-pill px-2 py-1 border">
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                 style={{ width: 34, height: 34, fontWeight: 800 }}>
              H
            </div>
            <span className="ms-2 d-none d-md-inline fw-semibold">Admin</span>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}