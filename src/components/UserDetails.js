import React from "react";
import { Row, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import image1 from "../img/profile.jpg";

const UserDetails = () => {
  const { loggedInUser } = useSelector((state) => state.user);

  return (
    <div>
      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "0px",
        }}
      >
        <Image
          src={image1}
          roundedCircle
          style={{ width: "300px", height: "300px", padding: "0px" }}
        ></Image>
      </Row>

      <Row className="mt-3">
        <h3 style={{ letterSpacing: "2px" }}>
          {loggedInUser.fname} {loggedInUser.lname}
        </h3>
      </Row>
      <Row>
        <small>{loggedInUser.email}</small>
      </Row>

      <Link to="/profile/edit">
        <Button className="mt-3 green-button" style={{ width: "100%" }}>
          Edit Profile
        </Button>
      </Link>
    </div>
  );
};

export default UserDetails;
