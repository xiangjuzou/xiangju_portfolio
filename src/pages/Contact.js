import ContactForm from '../components/ContactForm';
import  { Row, Col, Container} from 'react-bootstrap';
import React from 'react';

const Contact = () => {
    return ( 
  <div>
    <div className="text-center py-5 my-5" id="contactTitel">
    <p>Heb je nieuwe ideeën en uitdagingen? </p>
    <p> Stuur een berichtje.</p>

    </div>
    <Container className="my-5 py-5">
     <Row className='d-flex justify-content-center align-items-center'>
      <Col xs={3} md={4} xl={3}><h1 className='contact_rl px-3'>CONTACT ME</h1></Col>
      <Col xs={12} md={8} xl={8} ><ContactForm /> </Col>
    </Row>
    </Container>
  </div>

     );
}
 
export default Contact ;