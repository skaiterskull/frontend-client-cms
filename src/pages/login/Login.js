import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const Login = () => {
  return (
    <Layout>
      <Container className="d-flex justify-content-center">
        <div className="login-card">
          <h1 className="text-light">
            <i className="fas fa-user-circle"> Login</i>
          </h1>
          <p className="text-light fw-bolder">
            Enter your details below to log in, or{" "}
            <Link to="/registration" style={{ color: "green" }}>
              sign up
            </Link>
          </p>
          <Form>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="Enail Address"
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
          </Form>
          <p className="mt-3">
            <Link
              to="/reset-password"
              style={{ color: "green", fontWeight: "bolder" }}
            >
              Forgotten your password?
            </Link>
          </p>
          <div className="text-end">
            <Button className="px-5 green-button">Login</Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Login;
