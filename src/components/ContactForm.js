import React, { useState } from 'react';
import  {Button} from 'react-bootstrap';

const ContactForm = () => {
    const [voorName, setVoorName] = useState('');
    const [achterName, setAchterName] = useState('');
    const [telefoon, setTelefoon] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const onSubmit = (e) => {
        e.preventDefault()

    }

    return ( 
    <div className='bg-light text-center my-4'  >
     <form onSubmit={onSubmit}  className='p-4' >
     <div>
         <input className='m-2 p-2' type='text' placeholder='Voorname' value={voorName } onChange={ e=> setVoorName(e.target.value) } />
    </div>

     <div >
         <input className='m-2 p-2' type='text' placeholder='AchterName' value={achterName} onChange={ e=> setAchterName(e.target.value) } />
     </div>

     <div >
         <input className='m-2 p-2' type='number' placeholder='Telfoon' value={telefoon}  onChange={ e=> setTelefoon(e.target.value)} />
    </div>

    <div >
         <input className='m-2 p-2' type='email' placeholder='E-mail' value={email}  onChange={ e=> setEmail(e.target.value) }/>
         </div>

     <div >
         <input className='m-2 p-2' type='textarea' placeholder='Bericht' value={message} onChange={ e=>setMessage(e.target.value) }/>
    </div>
         <Button className='m-3 py-2 px-3' variant="outline-danger">Verstuur</Button>
     
     </form>
     </div>
     
     );
}
 
export default ContactForm;