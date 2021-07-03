import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
export default (props) => {
  var ButtonText = "Add To Cart";
  console.log("In Button");
  console.log(props);
  const addToCart = () => {
    props.addToCart();
  };
  return (
    <Container>
      <Row>
        <Col lg={3} sm={3}>
          {props.itemMap.hasOwnProperty(props.itemId) ? (
            <Button className="watch-now-btn" onClick={props.removeFromCart}>
              -
            </Button>
          ) : (
            <></>
          )}
        </Col>
        <Col lg={6} sm={6}>
          <Button className="watch-now-btn" onClick={addToCart}>
            <FaCartPlus className="play-btn" />
            {props.itemMap[props.itemId]}
          </Button>
        </Col>
        <Col lg={3} sm={3}>
          <Button className="watch-now-btn" onClick={addToCart}>
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
