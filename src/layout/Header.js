import  {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return ( 

<div>
<Navbar collapseOnSelect expand="md">
<Navbar.Brand href="/" style={{marginLeft:'45px', border:'1px solid red', fontSize:'25px'}} className='p-2'> z </Navbar.Brand>
<Navbar.Toggle aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" />
<Navbar.Collapse id="navbarSupportedContent">

<Nav className='mx-auto' style={{width:"fit-content"}}  id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse.show, .navbar-toggler" > 
<Nav.Link href="/" data-toggle="collapse">Home</Nav.Link>
<Nav.Link href="/Projects" data-toggle="collapse">Projects</Nav.Link>
<Nav.Link href="/Overme"  data-toggle="collapse">Over me</Nav.Link>
<Nav.Link href="/Contact" data-toggle="collapse">Contact</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>

</div>
     );
}
 



export default Header ;




