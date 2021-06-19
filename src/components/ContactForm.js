import React, { useState } from 'react';

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
    < >
     <form  onSubmit={onSubmit}className='p-5 bg-light' >
     <div>
         <input  style={{width:"400px"}}  className='my-2 p-2' type='text' placeholder='Voorname' value={voorName } onChange={ e=> setVoorName(e.target.value) } />
    </div>

     <div >
         <input  style={{width:"400px"}} className='my-2 p-2' type='text' placeholder='AchterName' value={achterName} onChange={ e=> setAchterName(e.target.value) } />
     </div>

     <div >
         <input style={{width:"400px"}} className='my-2 p-2' type='number' placeholder='Telfoon' value={telefoon}  onChange={ e=> setTelefoon(e.target.value)} />
    </div>

    <div >
         <input style={{width:"400px"}} className='my-2 p-2' type='email' placeholder='E-mail' value={email}  onChange={ e=> setEmail(e.target.value) }/>
         </div>

     <div >
         <input style={{width:"400px"}} className='my-2 p-2' type='textarea' placeholder='Bericht' value={message} onChange={ e=>setMessage(e.target.value) }/>
    </div>
         <button style={{border:'1px solid red'}} className='my-3 py-2 px-3' >Verstuur</button>
     
     </form>
     </>
     
     );
}
 
export default ContactForm;