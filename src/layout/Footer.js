import {GrFacebook} from 'react-icons/gr';
import {GrLinkedin} from 'react-icons/gr';
import  {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (  

<div className='footer bg-light pt-5' >
  <Container>
  <Row>
    <Col xs={8} md={10}> <h5> <span  style={{color:'red'}} >Samen</span> voor elkaar </h5></Col>
    <Col xs={2} md={1}> <a href='https://www.facebook.com/xiangju.zou/'> <GrFacebook size ='2rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> </a></Col>
    <Col xs={2} md={1}> <a href='https://www.linkedin.com/in/xiangju-zou-14a46589/'><GrLinkedin size ='2rem' style={{ color:'rgba(14, 118, 168,0.7)'}} /> </a></Col>
  </Row>
    
    <p className='pt-4 py-2 text-center'> Copyright &copy; 2021 - Xiangju Zou</p>
    </Container>
 </div>

    );
}
 
export default Footer; 