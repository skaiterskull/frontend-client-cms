import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./productAction";
import Layout from "../../components/Layout";

const Product = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const { category } = useParams();

  const catId = categories.filter((value) => value.slug === category);

  useEffect(() => {
    dispatch(fetchProducts(catId[0]?._id));
  }, [dispatch, catId]);

  return (
    <Layout>
      <Container>
        <h2 className="mt-3">{category} Page</h2>
      </Container>
    </Layout>
  );
};

export default Product;
