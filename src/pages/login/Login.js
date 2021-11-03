import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { CustomModal } from "../../components/CustomModal";
import { checkUserForLogin } from "../../apis/userApi";
import { LOGIN_SUCCESS } from "../home/userSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [userLoginData, setUserLoginData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const { isLoggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/dashboard";
  console.log(from, "login form");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData({
      ...userLoginData,
      [name]: value,
    });
  };

  useEffect(() => {
    isLoggedIn && history.replace(from);
  }, [isLoggedIn]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await checkUserForLogin(userLoginData);

    if (result.status === "success") {
      window.localStorage.setItem("refreshJWT", result.token.refreshJwt);
      window.sessionStorage.setItem("accessJWT", result.token.accessJwt);
      dispatch(LOGIN_SUCCESS(result.result));
    } else {
      setStatus(result.status);
      setMessage(result.message);
      setShowModal(true);
    }
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
      <CustomModal
        size="sm"
        title={status}
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <div>{message}</div>
      </CustomModal>
    </Layout>
  );
};

export default Login;
