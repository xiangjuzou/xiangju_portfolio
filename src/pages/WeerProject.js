import Weer from '../components/Weer';
import { Container} from 'react-bootstrap';
import React, {Fragment } from 'react';

const WeerProject = () => {
    return ( 
  <Fragment>

<Container className='my-4 px-1' >
  <Weer/>
</Container>
  
  </Fragment>

     );
}
 
export default WeerProject ;