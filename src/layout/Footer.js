import {GrFacebookOption } from 'react-icons/gr';
import {GrLinkedinOption } from 'react-icons/gr';
import  {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
    return (  

<footer className='pt-4 position-relative'>
  <Container>
  <Row>
    <Col xs={7} sm={8} md={10}> <h5> <span  style={{color:'red'}} >Samen</span> voor elkaar </h5></Col>
    <Col xs={5} sm ={4} md={2}><a id='facebookSign'href='https://www.facebook.com/xiangju.zou/'><GrFacebookOption size ='2rem' style={{color: 'white',backgroundColor:'rgba(59, 89, 152)'}} /></a>
    <a href='https://www.linkedin.com/in/xiangju-zou-14a46589/'><GrLinkedinOption size ='2rem' style={{ backgroundColor: '#292929', color:'rgba(14, 118, 168)'}} /> </a></Col>  
  
  </Row>
    </Container>
    <p className='pt-4 text-center'><small> Copyright &copy; 2021 - Xiangju Zou</small></p>
 </footer>

    );
}
 
export default Footer; 