import ContactForm from '../components/ContactForm';
import Weer from '../components/Weer';
import  { Row, Col, Container} from 'react-bootstrap';
import React, {Fragment } from 'react';

const Contact = () => {
    return ( 
  <Fragment>

<Container className='my-5' style={{padding:'0px'}}>
  <Weer/>
</Container>
  
   
  <Container>
   <Row>
   <Col xs={3} md={4} xl={2}><h1 className='contact_rl py-3 px-3'>CONTACT ME</h1></Col>
   <Col xs={8} md={7} xl={4} className='contact_info d-flex flex-column justify-content-center' >
     <p> <a href="mailto:xiangju.zou@gmail.com">xiangju.zou@gmail.com</a> </p>
     <p> +31 61 684 84 47 </p>
    </Col>
    <Col xs={12} md={12} xl={6} ><ContactForm /> </Col>
    </Row>
    </Container>
  </Fragment>

     );
}
 
export default Contact ;