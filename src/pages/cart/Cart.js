import React from "react";
import { Container, Table, Image, Badge, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { REQ_UPDATE_QTY, REQ_REMOVE_CART } from "./cartSlice";

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container>
        <h2>Shopping Cart</h2>
        <hr />

        {cartList.length ? (
          <>
            <Table responsive>
              <thead className="bg-dark text-light">
                <tr>
                  <th></th>
                  <th></th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartList?.map((value) => (
                  <tr className="p-0" key={cartList?._id}>
                    <td style={{ width: "10%" }}>
                      <Link to={`/${value?.category}/${value?.slug}`}>
                        <Image
                          src={value?.images}
                          style={{ width: "100px" }}
                        ></Image>
                      </Link>
                    </td>
                    <td style={{ width: "50%" }}>{value?.title}</td>
                    <td>
                      <div className="d-flex">
                        <button
                          className="bg-light"
                          onClick={() =>
                            dispatch(
                              REQ_UPDATE_QTY({
                                _id: value?._id,
                                qty: value?.qty - 1,
                              })
                            )
                          }
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <div
                          className="text-center"
                          style={{
                            width: "30px",
                            borderTop: "0.15rem solid",
                            borderBottom: "0.15rem solid",
                          }}
                        >
                          {value?.qty}
                        </div>
                        <button
                          className="bg-light"
                          onClick={() =>
                            dispatch(
                              REQ_UPDATE_QTY({
                                _id: value?._id,
                                qty: value?.qty + 1,
                              })
                            )
                          }
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td>$ {value?.price}</td>
                    <td>$ {value?.qty * value?.price}</td>
                    <td>
                      <button
                        className="bg-light"
                        onClick={() => dispatch(REQ_REMOVE_CART(value?._id))}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="p-3 mb-2 text-end">
              <h4>
                <Badge bg="dark">
                  Total = ${" "}
                  {cartList?.reduce(
                    (total, value) => total + value?.qty * value?.price,
                    0
                  )}
                </Badge>
              </h4>
            </div>
            <div className=" p-3 text-end">
              <Link to="/checkout">
                <Button className="mb-3 green-button " variant="dark">
                  <i className="far fa-credit-card"></i> Proceed to Checkout
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="mt-3">No product in the cart</div>
        )}
      </Container>
    </Layout>
  );
};

export default Cart;
