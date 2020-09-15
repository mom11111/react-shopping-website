import React from 'react'
import {Col, Container, Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Home.css'

import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import leaf from '../images/p4.png'
import prod1 from '../images/prod1.jpg'
import prod2 from '../images/prod2.jpg'
import prod3 from '../images/prod3.jpg'
import prod4 from '../images/prod4.jpg'
import prod5 from '../images/prod5.jpg'
import prod6 from '../images/prod6.jpg'
import prod7 from '../images/prod7.jpg'
import prod8 from '../images/prod8.jpg'
import veg1 from '../images/veg1.jpg'
import veg2 from '../images/veg2.jpg'
import veg3 from '../images/veg3.jpg'


export default function Home() {
    return (
        <Container fluid className="home">
         <Navbar />
         <Container fluid className="header">
             <Row>
                 <Col xs="12" sm="12" md="6" lg="6" xl="6" className="leftHeader">
                     <img src={p1} />
                 </Col>
                 <Col xs="12" sm="12" md="6" lg="6" xl="6" className="rightHeader">
                   <h3>Wel Come,<br/>In  the world of Organic Products.<br/><span>Be Organic, Buy Organic</span></h3>
                 </Col>
             </Row>
         </Container> 
         
         <Container fluid className="thirdSection">

         <Row>
             <Col xs="10" sm="10" md="3" lg="3" xl="3" className="section3">
              <h3>Free Shipping</h3>
              <p>above $5 only</p>
             </Col>
             <Col xs="10" sm="10" md="2" lg="2" xl="2" className="section3">
             <h3>Organic</h3>
              <p>above $5 only</p>
             </Col>
             <Col xs="10" sm="10" md="2" lg="2" xl="2" className="section3">
             <h3>Huge Savings</h3>
              <p>above $5 only</p>
             </Col>
             <Col xs="10" sm="12" md="3" lg="3" xl="3" className="section3">
              <h3>Easy Returns</h3>
              <p>above $5 only</p>
             </Col>
         </Row>

         </Container>

         <Container fluid className="boldtext">
         <h1>Best Selling Products</h1>
         <img src={leaf} />
         </Container>

         <Container fluid className="products">

         <Row>
             <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
             <Card>
             <CardImg top width="100%" style={{"height":"180px"}} src={prod1} alt="Card image cap" />
             <CardBody>
             <CardTitle>Groceries</CardTitle>
              <CardSubtitle><b>Black Lentils</b></CardSubtitle>
              <CardText>Price:100</CardText>
             <Button>Shop</Button>
               </CardBody>
              </Card>
             </Col>

             <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
             <Card>
             <CardImg top width="100%" style={{"height":"180px"}}  src={prod2} alt="Card image cap" />
             <CardBody>
             <CardTitle>Groceries</CardTitle>
              <CardSubtitle><b>Dry Fruits</b></CardSubtitle>
              <CardText>Price:450</CardText>
             <Button>Shop</Button>
               </CardBody>
              </Card>
             </Col>


             <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
             <Card>
             <CardImg top width="100%" style={{"height":"180px"}}  src={prod3} alt="Card image cap" />
             <CardBody>
             <CardTitle>Groceries</CardTitle>
              <CardSubtitle><b>Coffee</b></CardSubtitle>
              <CardText>Price:150</CardText>
             <Button>Shop</Button>
               </CardBody>
              </Card>
             </Col>


             <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
             <Card>
             <CardImg top width="100%" style={{"height":"180px"}}  src={prod4} alt="Card image cap" />
             <CardBody>
             <CardTitle>Groceries</CardTitle>
              <CardSubtitle><b>Olive Oil</b></CardSubtitle>
              <CardText>Price:700</CardText>
              <Button>Shop</Button>
               </CardBody>
              </Card>
             </Col>
         </Row>

         </Container>

         <Container fluid className="vegies">
         <Row>
             <Col xs="12" sm="12" md="4" lg="4" xl="g" className="veg">
             <Card>
             <CardBody style={{"height":"180px"}}>
            <CardTitle><b>Farm Fresh Fruits</b></CardTitle>
           <CardText>I am text block. Click edit button to change this tex em ips.</CardText>
             <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
            <CardImg bottom width="100%" style={{"height":"140px"}} src={veg2} alt="Card image cap" />
            </Card>
             </Col>

             <Col xs="12" sm="12" md="4" lg="4" xl="g" className="veg">
             <Card>
             <CardBody style={{"height":"180px"}}>
            <CardTitle><b>Fresh Vegetables</b></CardTitle>
           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
             <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
            <CardImg bottom width="100%" style={{"height":"140px"}} src={veg1} alt="Card image cap" />
            </Card>
             </Col>

             <Col xs="12" sm="12" md="4" lg="4" xl="g" className="veg">
             <Card>
             <CardBody style={{"height":"180px"}}>
            <CardTitle><b>Organic Legume</b></CardTitle>
           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
             <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
            <CardImg bottom width="100%" style={{"height":"140px"}} src={veg3} alt="Card image cap" />
            </Card>
             </Col>
         </Row>

         </Container>

         <Container fluid className="trenProd">
             <Row>
                 <Col xs="12" sm="12" md="8" lg="8" xl="8" className="discription">
                     <h1>Get 25% OFF on your first purchase!</h1>
                 </Col>
                 <Col xs="12" sm="12" md="4" lg="4" xl="4" className="discription">
                     <Button className="button">Shop Now</Button>
                 </Col>
             </Row>
         </Container>
         <Container fluid className="reg">
             <h1>Try it for free, No registration needed</h1>
         </Container>
         <Container fluid className="boldtext">
         <h1>Trending Products</h1>
         <img src={leaf} />
         </Container>

         <Container fluid className="products">

<Row>
    <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
    <Card>
    <CardImg top width="100%" style={{"height":"180px"}} src={prod5} alt="Card image cap" />
    <CardBody>
    <CardTitle>Groceries</CardTitle>
     <CardSubtitle><b>Orange Juice</b></CardSubtitle>
     <CardText>Price:200</CardText>
    <Button>Shop</Button>
      </CardBody>
     </Card>
    </Col>

    <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
    <Card>
    <CardImg top width="100%" style={{"height":"180px"}} src={prod6} alt="Card image cap" />
    <CardBody>
    <CardTitle>Groceries</CardTitle>
     <CardSubtitle><b>Fruits</b></CardSubtitle>
     <CardText>Price:200</CardText>
    <Button>Shop</Button>
      </CardBody>
     </Card>
    </Col>


    <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
    <Card>
    <CardImg top width="100%" style={{"height":"180px"}} src={prod7} alt="Card image cap" />
    <CardBody>
    <CardTitle>Groceries</CardTitle>
     <CardSubtitle><b>Vegies</b></CardSubtitle>
     <CardText>Price:100</CardText>
    <Button>Shop</Button>
      </CardBody>
     </Card>
    </Col>


    <Col xs="12" sm="12" md="3" lg="3" xl="3" className="prod">
    <Card>
    <CardImg top width="100%" style={{"height":"180px"}} src={prod8} alt="Card image cap" />
    <CardBody>
    <CardTitle>Groceries</CardTitle>
     <CardSubtitle><b>Beauty Prod</b></CardSubtitle>
     <CardText>Price:500</CardText>
     <Button>Shop</Button>
      </CardBody>
     </Card>
    </Col>
</Row>

</Container>

      <Container fluid className="boldtext">
         <h1>Customers Review</h1>
         <img src={leaf} />
         </Container>

         <Container fluid className="review">
           <Row>
             <Col xs="10" sm="10" md="3" lg="3" xl="3" className="reviewPart">
               <h5>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h5>
               <p><span><img src={p1} style={{"width":"30%", "height":"60px", "border-radius":"50%"}} /></span> <b>Sunny</b></p>
             </Col>
             <Col xs="12" sm="12" md="4" lg="4" xl="4" className="offers">
                 <h1>Deal of The Day 15% OFF on all Vegetables!</h1>
                 <Button style={{"margin-top":"40px"}}>Shop Now</Button>
             </Col>
             <Col xs="10" sm="10" md="3" lg="3" xl="3" className="reviewPart">
               <h5>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h5>
               <p><span><img src={p2} style={{"width":"30%", "height":"60px", "border-radius":"50%"}} /></span> <b>Nishant</b></p>
             </Col>

           </Row>
         </Container>
         <Footer />
        </Container>
    )
}
