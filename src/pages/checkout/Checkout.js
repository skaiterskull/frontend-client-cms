import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPaymentOptions } from "./paymentAction";
import { sendOrder } from "../orderData/orderAction";
import { useHistory } from "react-router-dom";

const initialState = {
  fname: "",
  lname: "",
  street: "",
  unit: "",
  city: "",
  state: "",
  postalCode: "",
};

const Checkout = () => {
  const { loggedInUser } = useSelector((state) => state.user);
  const { cartList } = useSelector((state) => state.cart);
  const { payOpt } = useSelector((state) => state.payOpt);
  const { orderResp } = useSelector((state) => state.order);
  const [selectedPayOpt, setSelectedPayOpt] = useState("");
  const [formDt, setformDt] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const total = cartList?.reduce(
    (total, value) => total + value?.qty * value?.price,
    0
  );
  const tax = total * 0.1;

  useEffect(() => {
    !payOpt?.length && dispatch(fetchAllPaymentOptions());
    if (orderResp === "success") {
      history.replace("/checkout/notification");
    }
  }, [dispatch, payOpt.length, history, orderResp]);

  const handleOnChange = (e) => {
    const { checked, value, name } = e.target;

    setformDt({
      ...formDt,
      [name]: value,
    });

    if (checked) {
      setSelectedPayOpt(value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { paymentOption, ...user } = formDt;
    const {
      createdAt,
      isEmailConfirmed,
      updatedAt,
      __v,
      dob,
      address,
      role,
      status,
      gender,
      ...restUser
    } = loggedInUser;

    const paymentDetails = {
      method: paymentOption,
      transactionId: "",
      totalPaid: 0,
    };

    const invoiceDetails = {
      total,
      tax,
      totalNet: total - tax,
    };

    const shippingAddressDetails = user;

    const obj = {
      userDetails: restUser,
      cartDetails: cartList,
      paymentDetails,
      invoiceDetails,
      shippingAddressDetails,
    };

    dispatch(sendOrder(obj));
  };

  return (
    <Layout>
      <Container>
        <Form onSubmit={handleOnSubmit}>
          <Row>
            <Col md={9}>
              <Row className="p-3">
                <h2>
                  You are almost there...<i className="fas fa-truck"></i>
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
                    <Form.Control
                      type="text"
                      name="fname"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "250px" }}
                  >
                    <Form.Label className="mb-0">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lname"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="mb-0">Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="street"
                      onChange={handleOnChange}
                    />
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
                      name="unit"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "250px" }}
                  >
                    <Form.Label className="mb-0">City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "100px" }}
                  >
                    <Form.Label className="mb-0">State</Form.Label>
                    <Form.Control
                      type="text"
                      name="state"
                      onChange={handleOnChange}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    style={{ width: "110px" }}
                  >
                    <Form.Label className="mb-0">Post Code</Form.Label>
                    <Form.Control
                      type="text"
                      name="postalCode"
                      onChange={handleOnChange}
                    />
                  </Form.Group>
                </Row>
              </Row>
              <hr />
              <Row className="p-3">
                <Row className="mb-3">
                  <h4>2. Payment Method</h4>
                </Row>
                <Row>
                  <Col>
                    {payOpt?.length &&
                      payOpt?.map((value) => (
                        <div key={value._id}>
                          <Form.Check
                            type="radio"
                            defaultValue={value.name}
                            label={value.name}
                            name="paymentOption"
                            onChange={handleOnChange}
                            style={{
                              marginBottom:
                                value.name !== selectedPayOpt ? "2rem" : "",
                            }}
                          />
                          {value.name === selectedPayOpt && (
                            <div className="mb-3 p-2 payment-info">
                              {value.info}
                            </div>
                          )}
                        </div>
                      ))}
                  </Col>
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
                  <p>${total}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Shipping fees:</p>
                  <p>Free</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Estimated tax:</p>
                  <p>${tax}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Total:</p>
                  <p>${total + tax}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Item count:</p>
                  <p>
                    {cartList?.reduce(
                      (ttlItem, value) => (ttlItem = ttlItem + value?.qty),
                      0
                    )}
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
          <div className="d-grid gap-2">
            <Button className="px-5 green-button my-3 inline" type="submit">
              Place Order
            </Button>
          </div>
        </Form>
      </Container>
    </Layout>
  );
};

export default Checkout;
