import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { findUserByEmail } from "../../apis/userApi";

const ResetPassNotif = () => {
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    findUserByEmail(email);
    setIsEmailSubmitted(true);
  };

  if (isEmailSubmitted) {
    return (
      <Layout>
        <Container className="d-flex justify-content-center">
          <div className="reset-card mb-5">
            <h1 className="text-light">Thank You</h1>
            <p className="text-light fw-bolder">
              If your email address is valid, a reset link will be sent.
            </p>
          </div>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container className="d-flex justify-content-center">
        <div className="reset-card mb-5">
          <h1 className="text-light">
            <i className="fas fa-lock-open"></i> Reset Password
          </h1>
          <p className="text-light fw-bolder">
            Please enter your email address you used to sign up. We will send an
            email with link to reset your password.
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
            <div className="text-end">
              <Button className="px-5 green-button" type="submit">
                Send Email
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default ResetPassNotif;
