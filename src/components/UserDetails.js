import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const { loggedInUser } = useSelector((state) => state.user);

  return (
    <div>
      <Row>
        <h3>Welcome {loggedInUser.fname}</h3>
      </Row>
      <Row className="mb-2">
        <Col md={4} className="mb-2">
          Full Name :{" "}
          <strong>
            {loggedInUser.fname} {loggedInUser.lname}
          </strong>
        </Col>
        <Col md={8}>
          Email : <strong>{loggedInUser.email}</strong>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={4} className="mb-2">
          Gender :{" "}
          <strong>{loggedInUser.gender ? loggedInUser.gender : "N/A"}</strong>
        </Col>
        <Col md={8}>
          DOB : <strong>{loggedInUser.dob ? loggedInUser.dob : "N/A"}</strong>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-2">
          Mobile :{" "}
          <strong>{loggedInUser.phone ? loggedInUser.phone : "N/A"}</strong>
        </Col>
        <Col md={8}>
          Address :{" "}
          <strong>{loggedInUser.address ? loggedInUser.address : "N/A"}</strong>
        </Col>
      </Row>
      <Link to="/profile/edit">
        <Button className="mt-3 green-button">Edit Profile</Button>
      </Link>
    </div>
  );
};

export default UserDetails;
