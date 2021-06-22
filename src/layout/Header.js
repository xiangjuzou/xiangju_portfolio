import  {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 

<div>
<Navbar collapseOnSelect expand="md">
<Navbar.Brand href="/" style={{border:'1px solid red'}} className='p-2 mx-5'> xz </Navbar.Brand>
<Navbar.Toggle aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
<Navbar.Collapse id="navbarSupportedContent">

<Nav className='mx-auto' style={{width:"auto"}}  id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse.show, .navbar-toggler" > 
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




