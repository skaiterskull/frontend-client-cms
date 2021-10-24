import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fecthCategory } from "../pages/product/categoryAction";

const Header = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fecthCategory());
    }
  }, [dispatch, categories]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>E-Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categories.map(
              (value) =>
                !value.parentCat &&
                value.status === "active" && (
                  <LinkContainer to={`/${value.slug}`}>
                    <Nav.Link key={value._id}>{value.name}</Nav.Link>
                  </LinkContainer>
                )
            )}
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
