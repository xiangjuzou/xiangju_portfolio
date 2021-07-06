import  {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header () {
    return ( 

<Navbar collapseOnSelect expand="md">   
        <Navbar.Brand href="/" style={{border:'1px solid red', color:'white'}} className='p-1 mx-5'> xz </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse >
        <Nav className="mx-auto"> 
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Projecten">Projecten</Nav.Link>
            <Nav.Link href="Overmij">Over mij</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
     );
}
 
export default Header ;
