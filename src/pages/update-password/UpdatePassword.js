import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import { updateUserPassword } from "../../apis/userApi";
import { CustomModal } from "../../components/CustomModal";

const UpdatePassword = () => {
  const [newPassword, setNewPassword] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCongratPage, setShowCongratPage] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const queries = new URLSearchParams(useLocation().search);
  const otp = queries.get("otp");
  const email = queries.get("email");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await updateUserPassword({
      otp,
      email,
      password: newPassword.newPassword,
    });
    if (result.status === "success") {
      setShowCongratPage(true);
    } else {
      setStatus(result.status);
      setMessage(result.message);
      setShowModal(true);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({
      ...newPassword,
      [name]: value,
    });
  };

  if (!otp || !email) {
    return (
      <Layout>
        <Container>
          <div className="mb-5" style={{ marginTop: "5rem" }}>
            <p>404 Page not found</p>
          </div>
        </Container>
      </Layout>
    );
  }

  if (showCongratPage) {
    return (
      <Layout>
        <Container>
          <div className="mb-5" style={{ marginTop: "5rem" }}>
            <p>Your password has been updated.</p>
          </div>
        </Container>
      </Layout>
    );
  }

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

export default UpdatePassword;
