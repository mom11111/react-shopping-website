import React from 'react'
import {Container, Col, Row} from 'reactstrap'
import '../styles/navbar.css'
import p5 from '../images/p5.jpg'

export default function Navbar() {
    return (
        <Container fluid className="myNav">
            <Row>
                <Col Xs="12" sm="6" md="3" lg="3" xl="3" className="logo">
                    <img src={p5} />
                </Col>
                <Col xs="12" sm="6" md="6" lg="6" xl="6" className="listPart">
                   <ul className="list">
                       <li>Home</li>
                       <li>Products</li>
                       <li>About</li>
                       <li>Contact</li>
                       <li>Account</li>
                   </ul>
                </Col>
            </Row>
        </Container>
    )
}
