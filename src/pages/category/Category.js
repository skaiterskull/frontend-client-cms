import React, { useEffect } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Badge,
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productAction";
import Layout from "../../components/Layout";

const Category = () => {
  const { category } = useParams();
  const { categories } = useSelector((state) => state.category);
  const { productList, isPending } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const catId = categories?.filter((value) => value.slug === category)[0];

  useEffect(() => {
    if (catId) {
      dispatch(fetchProducts(catId?._id));
    }
  }, [dispatch, categories, catId]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
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
        <h2 style={{ marginTop: "5rem" }}>{category} page.</h2>
        <p>{productList.length} products found.</p>
        <Row>
          {productList.map((value) => (
            <Col
              lg={3}
              md={4}
              sm={6}
              xs={6}
              className="d-flex justify-content-center mb-5"
            >
              <Card style={{ width: "15rem" }}>
                <Link to={`/${category}/${value.slug}`}>
                  <Card.Img variant="top" src={value.images[0]} />
                </Link>
                <Card.Body>
                  <Card.Title className="text-center">{value.title}</Card.Title>
                  <Card.Text className="text-center">
                    <h3>
                      <Badge bg="success">$ {value.price}</Badge>
                    </h3>
                  </Card.Text>
                  <Form
                    onSubmit={handleOnSubmit}
                    className=" d-flex justify-content-between"
                  >
                    <Form.Group>
                      <Form.Select defaultValue="1" style={{ width: "5rem" }}>
                        {[...Array(20)].map((x, i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    <Button>
                      Add <i class="fas fa-shopping-cart"></i>
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Category;
