import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fecthCategory } from "../pages/category/categoryAction";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, loggedInUser } = useSelector((state) => state.user);
  const { categories } = useSelector((state) => state.category);
  const { cartList } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fecthCategory());
    }
  }, [dispatch, categories]);

  if (isLoggedIn) {
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
                    <LinkContainer to={`/${value.slug}`} key={value._id}>
                      <Nav.Link key={value._id}>{value.name}</Nav.Link>
                    </LinkContainer>
                  )
              )}
            </Nav>
            <Nav>
              <LinkContainer to="/dashboard">
                <Nav.Link>
                  <img
                    src="http://localhost:8000/img/products/me.png"
                    alt=""
                    style={{
                      width: "23px",
                      height: "23px",
                      borderRadius: "50%",
                    }}
                  />
                  {"  "}
                  {loggedInUser.fname.toUpperCase()}
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  Cart <i className="fas fa-shopping-cart"></i> (
                  {cartList?.reduce(
                    (ttlItem, value) => (ttlItem = ttlItem + value?.qty),
                    0
                  )}
                  )
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

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
                  <LinkContainer to={`/${value.slug}`} key={value._id}>
                    <Nav.Link key={value._id}>{value.name}</Nav.Link>
                  </LinkContainer>
                )
            )}
          </Nav>
          <Nav>
            <LinkContainer to="/cart">
              <Nav.Link>
                Cart <i className="fas fa-shopping-cart"></i> (
                {cartList?.reduce(
                  (ttlItem, value) => (ttlItem = ttlItem + value?.qty),
                  0
                )}
                )
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>
                Login <i className="fas fa-user"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/registration">
              <Nav.Link>
                Sign Up <i className="fas fa-user-plus"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
