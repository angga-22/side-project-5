import React from "react";
import {
  Row,
  Container,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Appbar from "../../components/Appbar";
import Tables from "../../components/Table/index";

const Index = () => {
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
        <Col lg="2" sm="12">
          <Appbar />
        </Col>
        <Col lg="9" sm="12">
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Schedule</h1>
          <Tables />
        </Col>
      </Row>
    </>
  );
};

export default Index;
