import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div className="Home p-5">
      <div className="container display-container d-flex flex-column justify-content-between">
        <div className="display d-flex justify-content-center flex-column">
          <p className="display-title">You<span className="special">Shop</span></p>
          <h2 className="display-sub pb-4">A smarter way to shop!</h2>
        </div>
        <Link to="products">
          <Button variant="dark" className="display-btn">Start Shopping</Button>
        </Link>
      </div>
    </div>
  )
}
