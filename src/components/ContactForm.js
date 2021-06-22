import React, { useState } from 'react';
import  {Button} from 'react-bootstrap';

const ContactForm = () => {
    const [voorNaam, setVoorNaam] = useState('');
    const [achterNaam, setAchterNaam] = useState('');
    const [telefoon, setTelefoon] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [mailResult, setMailresult] = useState('');

    const ue = (text) => {
        return encodeURIComponent(text);
    }

    const onSubmit = (e) => {
        e.preventDefault()

        let data = `voornaam=${ue(voorNaam)}&achternaam=${ue(achterNaam)}&telefoon=${ue(telefoon)}&email=${ue(email)}&message=${ue(message)}`;
          
        fetch('https://www.xiangju.nl/sendmail.php', {
            method: "POST",
            body: data,
            headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
          })
          .then(response => response.text()) 
          .then(() => setMailresult('Bericht is verstuurd, ik neem spoedig contact met je op!'))
          .catch(err => {
              setMailresult('Bericht niet verstuurd, helaas! Stuur een email of bel mij even.'); 
              console.log(err);
            });
    }


    return ( 
    <div className='bg-light text-center my-4'  >
        {mailResult === '' && (
        <form onSubmit={onSubmit}  className='p-4' >
            <div>
                <input className='m-2 p-2' type='text' placeholder='Voornaam' value={voorNaam} onChange={ e=> setVoorNaam(e.target.value) } />
            </div>
            <div>
                <input className='m-2 p-2' type='text' placeholder='Achternaam' value={achterNaam} onChange={ e=> setAchterNaam(e.target.value) } />
            </div>
            <div>
                <input className='m-2 p-2' type='number' placeholder='Telefoon' value={telefoon}  onChange={ e=> setTelefoon(e.target.value)} />
            </div>
            <div>
                <input className='m-2 p-2' type='email' placeholder='E-mail' value={email}  onChange={ e=> setEmail(e.target.value) }/>
            </div>
            <div>
                <textarea rows='5' className='m-2 p-2' placeholder='Bericht' value={message} onChange={ e=>setMessage(e.target.value) }/>
            </div>
            <Button className='m-3 py-2 px-3 form_button text-dark' type='submit' variant="outline-danger">Verstuur</Button>
        </form>
        )}
        {mailResult !== '' && (
            <div id="mailresult">
                {mailResult}
            </div>
        )}
     </div>
     
     );
}
 
export default ContactForm;