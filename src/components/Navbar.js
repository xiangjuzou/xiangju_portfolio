import {Link} from "react-router-dom";


const Navbar = () => {
    return ( 
<div className="navbar" >
 
<Link style={linkStyle} to="Home">Home </Link>
<Link style={linkStyle} to="Projects">Projects </Link>
<Link style={linkStyle} to="Over me">Over me </Link>
<Link style={linkStyle} to="Contact">Contact </Link>

</div>
     );
}
 
const linkStyle = {
   padding: '15px',
   textDecoration: 'none',
   borderBottom: '1px red solid'
}



export default Navbar ;




