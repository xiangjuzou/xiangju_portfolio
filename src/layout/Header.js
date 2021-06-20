import  {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 

<div>
<Navbar collapseOnSelect expand="md">
<Navbar.Brand href="/" style={{marginLeft:'45px', border:'1px solid red', fontSize:'25px'}} className='p-2'> z </Navbar.Brand>
<Navbar.Toggle aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
<Navbar.Collapse id="navbarSupportedContent">

<Nav className='mx-auto' style={{width:"fit-content"}}  id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse.show, .navbar-toggler" > 
<Nav data-toggle="collapse"><Link to="/">Home</Link></Nav>
<Nav data-toggle="collapse"><Link to="/Projects">Projects</Link></Nav>
<Nav data-toggle="collapse"><Link to="/Overme">Over me</Link></Nav>
<Nav data-toggle="collapse"><Link to="/Contact">Contact</Link></Nav>
</Nav>
</Navbar.Collapse>
</Navbar>

</div>
     );
}
 



export default Header ;




