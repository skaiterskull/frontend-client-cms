import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const EditProfileForm = () => {
  const { loggedInUser } = useSelector((state) => state.user);

  const [updatedUserInfo, setUpdatedUserInfo] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserInfo({ ...updatedUserInfo, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const obj = {
      fname: updatedUserInfo.fname,
      lname: updatedUserInfo.lname,
      dob: updatedUserInfo.dob,
      phone: updatedUserInfo.phone,
      address: updatedUserInfo.address,
    };
  };

  useEffect(() => {
    setUpdatedUserInfo(loggedInUser);
  }, [loggedInUser]);

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          First Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="fname"
            value={updatedUserInfo.fname}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Last Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="lname"
            value={updatedUserInfo.lname}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="email"
            name="email"
            value={updatedUserInfo.email}
            disabled
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          DOB
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="date"
            name="dob"
            value={updatedUserInfo.dob}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Mobile
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="phone"
            value={updatedUserInfo.phone}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          Address
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            name="address"
            value={updatedUserInfo.address}
            onChange={handleOnChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Update Profile</Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default EditProfileForm;
