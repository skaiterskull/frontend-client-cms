import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import OrderList from "../../components/OrderList";
import UserDetails from "../../components/UserDetails";
import { fetchOrder } from "../orderData/orderAction";

const Profile = () => {
  const { loggedInUser } = useSelector((state) => state.user);
  const { userOrder } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedInUser?.email) {
      dispatch(fetchOrder(loggedInUser.email));
    }
  }, [dispatch, loggedInUser.email]);
  return (
    <Layout>
      <Container>
        <Row className="mb-3">
          <Col lg={4} className="px-3 mb-5">
            <UserDetails />
          </Col>
          <Col lg={8} className="px-3">
            <h3 style={{ letterSpacing: "2px" }}>Order History</h3>
            <ListGroup variant="flush">
              {userOrder.length &&
                userOrder.map((value) => (
                  <OrderList
                    _id={value._id}
                    date={value.createdAt}
                    total={value.invoiceDetails}
                    status={value.paymentDetails}
                  />
                ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Profile;
