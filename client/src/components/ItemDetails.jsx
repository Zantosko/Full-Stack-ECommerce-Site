import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getItemDetails } from '../actions/itemDetail-actions';
import { Container, Row, Col, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { addItemToCart } from '../actions/cart-actions'

export default function ItemDetails({ match }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const pageID = match.params.id;

  if (!products[0]) return (<Redirect to="/err"/>)

  const specificProduct = products[0].filter(product => (product.id == pageID));
  const extractedProduct = specificProduct[0];

  return (
    <div>
      {
        products[0] != null ?
        <Container className="mt-5 mb-5 d-flex flex-column">
          <Row>
            <Col xs={12} md={6}>
                <img src={extractedProduct.image} className="item-img"/>
            </Col>
            <Col xs={12} md={6}>
                <Card>
                  <Card.Body className="item-body d-flex flex-column justify-content-around">
                    <Card.Title className="item-title">{extractedProduct.title}</Card.Title>
                    <Card.Text className="item-price">${extractedProduct.price}</Card.Text>
                    <div className="btn-container">
                      <Button 
                      className="item-btn"
                      onClick={() => {
                        addItemToCart(dispatch, extractedProduct)
                        alert("Item added to cart!")
                      }}
                      >Add To Cart</Button>
                      <Link to="/products">
                        <Button variant="dark" className="back-btn">Go Back</Button>
                      </Link>
                    </div>
                    
                  </Card.Body>
                </Card> 
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="item-description mt-3">
                <h4>Description:</h4>
                {extractedProduct.description}
              </div>
            </Col>
          </Row>
        </Container> :
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      }
    </div>
  )
}
