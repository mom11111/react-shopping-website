import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/footer.css'

export default function Footer() {
    return (
        <Container fluid className="footer">
           <Row>
               <Col md="4" lg="4" xl="4">
               <h3>Quick Links</h3>
                   <ul className="leftList">
                       <li>Home</li>
                       <li>About Us</li>
                       <li>Contact us</li>
                       <li>Cart</li>
                   </ul>
               </Col>
               <Col md="4" lg="4" xl="4">
               <h3>New Prods</h3>
               <ul className="midList">
                       <li>Beauty Kit</li>
                       <li>Legumes</li>
                       <li>Vegies</li>
                       <li>Fruits</li>
                   </ul>
               </Col>
               <Col md="4" lg="4" xl="4">
               <h3>Top Offers</h3>
               <ul className="rightList">
                  <li></li>
                       <li>Coffee</li>
                       <li>Juice</li>
                       <li>Dry Fruits</li>
                       <li>Legumes</li>
                   </ul>
               </Col>
           </Row>
        </Container>
    )
}
