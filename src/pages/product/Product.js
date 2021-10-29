import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Form,
  Button,
  Spinner,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductBySlug } from "../category/productAction";
import { addDataToCart } from "../cart/cartAction";
import Layout from "../../components/Layout";

const Product = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [cartQty, setCartQty] = useState(1);
  const { category, productSlug } = useParams();
  const { productList, isPending } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const productInState = productList.filter((value) =>
    value.slug.includes(productSlug)
  )[0];

  useEffect(() => {
    if (!productInState) {
      dispatch(fetchProductBySlug(productSlug));
    }
  }, [dispatch, productSlug, productInState]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setCartQty(Number(value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { _id, title, images, price, slug } = productInState;
    const cartData = {
      _id,
      title,
      images: images[0],
      price,
      qty: cartQty,
      slug,
      category,
    };
    dispatch(addDataToCart(cartData));
  };

  if (isPending) {
    return (
      <Layout>
        <Spinner
          animation="grow"
          variant="primary"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        ></Spinner>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <h2 style={{ marginTop: "5rem" }}>Product Details</h2>
        <Link to={`/${category}`}>
          <h5>Go back</h5>
        </Link>
        <hr />
        <div className="text-center">
          {isPending && <Spinner variant="primary" animation="grow"></Spinner>}
        </div>

        {productInState ? (
          <Row>
            <Col lg={6} className="mb-3">
              <Image
                className="mb-3"
                src={productInState?.images[imgIndex]}
                rounded
                fluid
              />
              <div className="d-flex justify-content-center">
                <ListGroup horizontal style={{ width: "fit-content" }}>
                  {productInState?.images.map((value, i) =>
                    i < 5 ? (
                      <ListGroup.Item
                        key={i}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setImgIndex(i);
                        }}
                      >
                        <Image
                          src={value}
                          style={{ maxWidth: "2.5rem" }}
                        ></Image>
                      </ListGroup.Item>
                    ) : (
                      ""
                    )
                  )}
                </ListGroup>
              </div>
            </Col>
            <Col lg={6}>
              <h1 className=" fw-bold text-info">{productInState?.title}</h1>
              <p className="text-muted text-secondary">
                * {productInState?.brand}
              </p>
              <p>{productInState?.description}</p>
              <h1 className="mb-3">
                <Badge bg="success">$ {productInState?.price}</Badge>
              </h1>
              <Form className=" d-flex gap-3 mb-3" onSubmit={handleOnSubmit}>
                <Form.Group>
                  <Form.Select
                    onChange={handleOnChange}
                    defaultValue="1"
                    style={{ width: "5rem" }}
                  >
                    {[...Array(20)].map((x, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Button disabled={productInState.qty < 1} type="submit">
                  Add <i className="fas fa-shopping-cart"></i>
                </Button>
              </Form>
            </Col>
          </Row>
        ) : (
          <div>Data not found.</div>
        )}
      </Container>
      ;
    </Layout>
  );
};

export default Product;
