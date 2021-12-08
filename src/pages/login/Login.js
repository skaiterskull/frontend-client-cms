import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { userLogin, autoLogin } from "../userData/userAction";

const initialState = {
  email: "hendra2.here@yahoo.com",
  password: "aaaaaaaa",
};

const Login = () => {
  const [userLoginData, setUserLoginData] = useState(initialState);

  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/dashboard";

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData({
      ...userLoginData,
      [name]: value,
    });
  };

  useEffect(() => {
    !isLoggedIn && dispatch(autoLogin());
    isLoggedIn && history.replace(from);
  }, [isLoggedIn, history, from, dispatch]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(userLogin(userLoginData));
  };

  return (
    <Layout>
      <Container className="d-flex justify-content-center">
        <div className="login-card mb-5">
          <h1 className="text-light">
            <i className="fas fa-user-circle"> Login</i>
          </h1>
          <p className="text-light fw-bolder">
            Enter your details below to log in, or{" "}
            <Link to="/registration" style={{ color: "green" }}>
              sign up
            </Link>
          </p>
          <Form onSubmit={handleOnSubmit}>
            <Form.Floating className="mb-3">
              <Form.Control
                value={userLoginData.email}
                name="email"
                id="floatingInputCustom"
                type="email"
                placeholder="Enail Address"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                value={userLoginData.password}
                name="password"
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <p className="mt-3">
              <Link
                to="/reset-password"
                style={{ color: "green", fontWeight: "bolder" }}
              >
                Forgotten your password?
              </Link>
            </p>
            <div className="text-end">
              <Button className="px-5 green-button" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
