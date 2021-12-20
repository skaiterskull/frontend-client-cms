import React from "react";
import { Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import UserDetails from "../../components/UserDetails";

const css = {
  border: "2px solid black",
  padding: "1rem",
  marginBottom: "2rem",
  borderRadius: "10px",
};

const Profile = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ ...css }}>
          <UserDetails />
        </Row>
        <Row style={{ ...css }}>This is for order history</Row>
      </Container>
    </Layout>
  );
};

export default Profile;
