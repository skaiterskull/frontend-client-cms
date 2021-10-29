import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const Verification = () => {
  return (
    <Layout>
      <Container>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "100%", height: "93vh" }}
        >
          <div
            className="p-5 text-center"
            style={{
              background: "black",
              width: "fit-content",
              height: "fit-content",
              borderRadius: "10px",
              boxShadow: "2px 2px 5px grey",
            }}
          >
            <h1
              style={{ fontWeight: "bolder", color: "green", fontSize: "80px" }}
            >
              <i className="fas fa-check"></i>
            </h1>
            <h2 className="mb-4" style={{ color: "white" }}>
              Your account has been verified.
            </h2>
            <Link to="/login">
              <Button style={{ width: "fit-content" }} variant="success">
                Continue to Login <i className="fas fa-hand-point-right"></i>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Verification;
