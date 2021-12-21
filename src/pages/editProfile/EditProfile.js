import React from "react";
import Layout from "../../components/Layout";
import { Container } from "react-bootstrap";
import EditProfileForm from "../../components/EditProfileForm";

const EditProfile = () => {
  return (
    <Layout>
      <Container>
        <EditProfileForm />
      </Container>
    </Layout>
  );
};

export default EditProfile;
