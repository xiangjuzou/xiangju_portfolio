import ContactForm from '../components/ContactForm';
import Weer from '../components/Weer';
import  { Row, Col, Container} from 'react-bootstrap';
import React, { Component,  Fragment } from 'react';

const Contact = () => {
    return ( 
  <Fragment>

  <Container >
  <Row className='my-5 px-5'>
  <Col md={10}><Weer/></Col>
  </Row>
  </Container>

  <div></div>
   
  <Container className='my-5 py-5' >
   <Row>
   <Col xs={2} md={6} lg={2}><h1 className='my-5 py-5'style={{writingMode:'vertical-rl', textOrientation:'use-glyph-orientation'}}>CONCACT ME</h1></Col>
   <Col xs={8} md={6}  lg={5}className="my-5 px-5 d-flex flex-column justify-content-center" >
    <p style={{fontSize:'25px'}}> xiangju.zou@gmail.com </p>
     <p style={{fontSize:'25px'}} > +31 61 684 84 47 </p>
    </Col>
    <Col xs={12} md={12} lg={5} ><ContactForm /> </Col>
    </Row>
    </Container>

  

 
   
  </Fragment>

     );
}
 
export default Contact ;