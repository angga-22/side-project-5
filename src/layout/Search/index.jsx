import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Doctor } from "./Data";
import StarRatings from "react-star-ratings";
import "./index.scss";

const Index = () => {
  const [isSearch, setIsSearch] = useState();
  const [rating] = useState();

  return (
    <Container>
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="/">Psikiater</NavbarBrand>
        <Nav className="mr-auto" navbar style={{ marginLeft: "800px" }}>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <h1>SEARCH DOCTOR</h1>

      <InputGroup>
        <Input
          type="text"
          placeholder="Find Your Doctor..."
          prefix="fas fa-search"
          onChange={(e) => {
            setIsSearch(e.target.value);
          }}
        />
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="fas fa-search"></i>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <Link to="/dashboard" className="link">
        {Doctor.filter((item) => {
          if (isSearch === "") {
            return item;
          } else if (item.name.toLowerCase().includes(isSearch)) {
            return item;
          } else {
            return null;
          }
        }).map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="left-side">
                <div className="name">
                  <h4>{item.name}</h4>
                </div>
                <div className="address">
                  <p>{item.address}</p>
                </div>
                <div className="experience">
                  <h6>{item.experience}+ years experiences</h6>
                </div>
              </div>
              <div className="middle-side">
                <div className="star">
                  <StarRatings
                    rating={rating}
                    numberOfStars={item.star}
                    name="rating"
                  />
                </div>
                <div className="price">
                  <h2> Rp. {item.price} / hour</h2>
                </div>
              </div>
              <div className="right-side">
                <img
                  src={item.image}
                  alt="images"
                  style={{
                    width: "140px",
                    borderRadius: "50%",
                    float: "right",
                  }}
                />
              </div>
            </div>
          );
        })}
      </Link>
    </Container>
  );
};

export default Index;
