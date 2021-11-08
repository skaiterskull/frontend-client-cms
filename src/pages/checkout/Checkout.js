import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Layout from "../../components/Layout";

const Checkout = () => {
  return (
    <Layout>
      <Container>
        <Form>
          <Row>
            <Col md={9}>
              <Row className="p-3">
                <h2>
                  You are almost there . . . <i class="fas fa-truck"></i>
                </h2>
              </Row>
              <hr />
              <Row className="p-3">
                <Row className="mb-3 ">
                  <h4>1. Billing Address</h4>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "250px" }}
                  >
                    <Form.Label className="mb-0">First Name</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "250px" }}
                  >
                    <Form.Label className="mb-0">Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0">Address</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "350px" }}
                  >
                    <Form.Label className="mb-0">
                      Unit/Apartment/Floor
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Unit, Apartment, Floor, #optional"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "250px" }}
                  >
                    <Form.Label className="mb-0">City</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "100px" }}
                  >
                    <Form.Label className="mb-0">State</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "110px" }}
                  >
                    <Form.Label className="mb-0">Post Code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Row>
              </Row>
              <hr />
              <Row className="p-3">
                <Row className="mb-3">
                  <h4>2. Payment Method</h4>
                </Row>
              </Row>
            </Col>
            <Col md={3}>
              <Row className="p-3">
                <h4>Order Summary</h4>
              </Row>
              <Row className="p-3 bg-warning">
                <h5>Your Shopping</h5>
                <div className="d-flex justify-content-between">
                  <p>Subtotal:</p>
                  <p>$ 100</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Shipping fees:</p>
                  <p>Free</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Estimated tax:</p>
                  <p>$ 20</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Total:</p>
                  <p>$ 120</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Item count:</p>
                  <p>25</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </Layout>
  );
};

export default Checkout;
