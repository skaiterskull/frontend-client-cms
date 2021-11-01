import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  return (
    <Layout>
      <Container className="d-flex justify-content-center">
        <div className="mb-5" style={{ marginTop: "5rem" }}>
          <h2>
            <i className="fas fa-lock-open"></i> Update Password
          </h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Floating className="mb-3">
              <Form.Control
                name="newPassword"
                id="floatingInputCustom"
                type="password"
                placeholder="New Password"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="floatingInputCustom">New Password</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                name="confirmPass"
                id="floatingInputCustom"
                type="password"
                placeholder="Confirm New Password"
                required
                onChange={handleOnChange}
              />
              <label htmlFor="floatingInputCustom">Confirm New Password</label>
            </Form.Floating>
            <div className="d-grid">
              <Button
                className="px-5 green-button"
                type="submit"
                disabled={newPassword.newPassword !== newPassword.confirmPass}
              >
                Update Password
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </Layout>
  );
};

export default UpdatePassword;
