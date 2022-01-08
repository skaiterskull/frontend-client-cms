import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderList = ({ _id, date, total, status }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-start bg-transparent">
      <div className="ms-2 me-auto">
        <Link to={`/order/${_id}`}>
          <div className="fw-bold fs-5">#{_id}</div>
        </Link>
        <div className="d-flex gap-2">
          <small>20 items</small>
          <small>{date.substr(0, 4)}</small>
        </div>
        <div>Total ${total.total}</div>
      </div>
      <Badge variant="primary" pill>
        {status.status}
      </Badge>
    </ListGroup.Item>
  );
};

export default OrderList;
