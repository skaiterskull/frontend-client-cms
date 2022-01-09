import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fecthCategory } from "../pages/category/categoryAction";
import { userLogout } from "../pages/userData/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { cartList } = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fecthCategory());
    }
  }, [dispatch, categories]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <LinkContainer to="/" style={{ letterSpacing: "2px" }}>
          <Navbar.Brand>E-Shop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {categories?.map(
              (value) =>
                !value.parentCat &&
                value.status === "active" && (
                  <LinkContainer
                    to={`/${value.slug}`}
                    key={value._id}
                    style={{ letterSpacing: "2px" }}
                  >
                    <Nav.Link key={value._id}>{value.name}</Nav.Link>
                  </LinkContainer>
                )
            )}
          </Nav>
          {isLoggedIn ? (
            <Nav>
              <LinkContainer to="/profile" style={{ letterSpacing: "2px" }}>
                <Nav.Link>
                  My Profile <i class="fas fa-user-circle"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart" style={{ letterSpacing: "2px" }}>
                <Nav.Link>
                  Cart <i className="fas fa-shopping-cart"></i> (
                  {cartList?.reduce(
                    (ttlItem, value) => (ttlItem = ttlItem + value?.qty),
                    0
                  )}
                  )
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/home" style={{ letterSpacing: "2px" }}>
                <Nav.Link onClick={() => dispatch(userLogout())}>
                  Log Out
                </Nav.Link>
              </LinkContainer>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to="/cart" style={{ letterSpacing: "2px" }}>
                <Nav.Link>
                  Cart <i className="fas fa-shopping-cart"></i> (
                  {cartList?.reduce(
                    (ttlItem, value) => (ttlItem = ttlItem + value?.qty),
                    0
                  )}
                  )
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login" style={{ letterSpacing: "2px" }}>
                <Nav.Link>
                  Login <i className="fas fa-user"></i>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer
                to="/registration"
                style={{ letterSpacing: "2px" }}
              >
                <Nav.Link>
                  Sign Up <i className="fas fa-user-plus"></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
