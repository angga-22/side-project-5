import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Navbar, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

import { NavbarBrand, NavLink } from "reactstrap";

const index = () => {
  return (
    <>
      <Navbar color="light" light expand="lg">
        <Container>
          <NavbarBrand href="/">Psikiater</NavbarBrand>
          <Nav className="mr-auto" navbar style={{ marginLeft: "68vw" }}>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>About</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Row>
        <Col xs="2">
          <Navbar style={{ height: "90vh" }}>
            <Nav vertical>
              <NavItem>
                <Link to="/dashboard" className="links">
                  <h5 className="link">
                    {" "}
                    <i class="far fa-calendar-alt"></i> Schedule
                  </h5>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/history" className="links">
                  <h5 className="link">
                    {" "}
                    <i class="fas fa-history"></i> History
                  </h5>
                </Link>
              </NavItem>
            </Nav>
            <Nav vertical>
              <NavItem>
                <Link to="/profile" className="links">
                  <h5 className="link">
                    {" "}
                    <i class="fas fa-user-circle"></i> Profile
                  </h5>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="links">
                  <h5 className="link">
                    {" "}
                    <i class="fas fa-sign-out-alt"></i> Sign Out
                  </h5>
                </Link>
              </NavItem>
            </Nav>
          </Navbar>
        </Col>
        <Col xs="10">
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Profile</h1>
        </Col>
      </Row>
    </>
  );
};

export default index;
