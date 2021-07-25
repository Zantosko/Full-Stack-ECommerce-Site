import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <Container>
          <Row>
            <Col md={4}>
              <ListGroup className="footer-list-group">
                <ListGroup.Item className="footer-list-item"><strong>Product</strong></ListGroup.Item>
                <ListGroup.Item className="footer-list-item">Product 1</ListGroup.Item>
                <ListGroup.Item className="footer-list-item">Product 2</ListGroup.Item>
                <ListGroup.Item className="footer-list-item">Plans & Prices</ListGroup.Item>
                <ListGroup.Item className="footer-list-item">FAQ</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup className="footer-list-group">
                <ListGroup.Item className="footer-list-item"><strong>Company</strong></ListGroup.Item>
                <ListGroup.Item className="footer-list-item">About Us</ListGroup.Item>
                <ListGroup.Item className="footer-list-item">Job postings</ListGroup.Item>
                <ListGroup.Item className="footer-list-item">News and articles</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={4}>
              <ListGroup className="footer-list-group">
                <ListGroup.Item className="footer-list-item"><strong>Contact & Support</strong></ListGroup.Item>
                <ListGroup.Item className="footer-list-item"><i class="fas fa-phone"></i> (555) 555-555</ListGroup.Item>
                <ListGroup.Item className="footer-list-item"><i class="fas fa-comments"></i> Live Chat</ListGroup.Item>
                <ListGroup.Item className="footer-list-item"><i class="fas fa-envelope"></i> Contact Us</ListGroup.Item>
                <ListGroup.Item className="footer-list-item"><i class="fas fa-star"></i> Give feedback</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <div class="text-center"><i class="fas fa-ellipsis-h"></i></div>
          <Row className="mt-3">
            <Col md={4}>
              <div className="inline-items">
                <p>Copyright &copy; YouShop</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="inline-items d-flex justify-content-around pb-2">
                <i class="social fab fa-twitter"></i>
                <i class="social fab fa-facebook-f"></i>
                <i class="social fa fab fa-instagram"></i>
              </div>
            </Col>
            <Col md={4}>
              <div className="inline-items d-flex justify-content-around">
                <p className="pr-2">Privacy Policy</p>
                <p>Terms of Use</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}
