import React, { useState } from "react";
import { Row, Card, Container, Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomModal } from "../../components/CustomModal";
import { addNewUser } from "../../apis/userApi";
import Layout from "../../components/Layout";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
};

const Registration = () => {
  const [newUser, setNewUser] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await addNewUser(newUser);
    setIsLoading(false);
    setMessage(result.message);
    setStatus(result.status);
    setShowModal(true);
    if (result.status === "error") {
      return;
    }
    e.target.reset();
  };

  return (
    <Layout>
      <Container>
        <div className="regis-page" style={{ marginTop: "5rem" }}>
          <div className="text-center fs-2 pt-5 mb-3">
            <Link to="/">E-shop</Link>
          </div>

          {status && (
            <CustomModal
              size="sm"
              title={status}
              show={showModal}
              onHide={() => setShowModal(false)}
            >
              <div>{message}</div>
            </CustomModal>
          )}

          <Row className="d-flex justify-content-center">
            <Card className="p-3 mb-3" style={{ width: "350px" }}>
              <div className="fs-4 text-center ">Register Now !</div>
              <div className="text-center mb-3">
                Already have an account?{" "}
                <Link className=" fw-bold text-success" to="/login">
                  Sign In
                </Link>
              </div>

              {isLoading && (
                <Spinner
                  animation="grow"
                  style={{
                    position: "absolute",
                    left: "45%",
                    right: "45%",
                    top: "15%",
                  }}
                />
              )}

              <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="fname"
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lname"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    required
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={handleOnChange}
                  />
                </Form.Group>
                <div className="d-grid mb-3">
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
            </Card>
          </Row>
        </div>
      </Container>
    </Layout>
  );
};

export default Registration;
