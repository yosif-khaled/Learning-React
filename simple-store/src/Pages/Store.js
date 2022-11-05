import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productStore";
import ProductCard from "../Components/ProductCard";

// Check if Col works like an li
const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">Welcome To Store!!</h1>
      <Row xs={1} md={3} className="g-4">

        {
          productsArray.map((product, idx) => (
            <Col align="center" key={idx} >
              <ProductCard product={product}/>
            </Col>
          ))
        }
      </Row>
    </>
  );
};

export default Store;
