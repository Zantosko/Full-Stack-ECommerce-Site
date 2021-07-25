import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Item({ product }) {
  const products = useSelector(state => state.products)

  return (
    <div className="Item m-3">
      <Card className="card d-flex justify-content-center align-items-center">
          <div className="card-img-container d-flex justify-content-center">
            <Card.Img variant="top" src={product.image} className="card-img p-2"/>
          </div>
          <Card.Body className="card-body">
            <Card.Title className="card-title">{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            <Link to={`/products/${product.id}`} className="link">
              <Button variant="light">View Product</Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  )
}
