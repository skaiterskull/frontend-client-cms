import React from "react";
import Layout from "../../components/Layout";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { RESET_ORDER } from "../orderData/orderSlice";

const CheckoutComplete = () => {
  const { order } = useSelector((state) => state.order);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch(RESET_ORDER());
    history.replace("/");
  };

  return (
    <Layout>
      <Container>
        {order?._id ? (
          <>
            <h1>Congratulations, your order has been placed.</h1>
            <h3>Your order number is {order._id}</h3>
          </>
        ) : (
          <h1>No order has been placed yet.</h1>
        )}
        <Button onClick={handleOnClick}>Go to Home or Place New Order</Button>
      </Container>
    </Layout>
  );
};

export default CheckoutComplete;
