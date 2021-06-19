import React, { useState } from 'react';
import { useImperativeHandle } from 'react';
import {FiPlus} from 'react-icons/fi';
import {FiX} from 'react-icons/fi';
import  {Collapse} from 'react-bootstrap';


const CollapseVerhaal = ({faq}) => {

    const [open, setOpen]= useState(false);
    
    return (
        <>
          <div className='d-flex ' style={{width:'815px', margin:'auto'}}>
             <h3 className="p-4 my-2 flex-grow-1 bg-light" >{faq.vraag}</h3>

             <button className='my-2 px-2 bg-light' style={{border:'none'}}
                onClick={() => setOpen(!open)}
                aria-controls="collapse-text"
                aria-expanded={open} >

               {!open? <FiPlus size ='2rem' style={{color:'red'}}/>:< FiX size ='2rem'/>} </button>
             </div>

            <Collapse in={open} id="collapse-text"style={{width:'815px', margin:'auto'}} >
                <p className='p-4 my-2'>{faq.verhaal}</p>
           </Collapse> 
     </>
     );
     


}
 
export default CollapseVerhaal;



