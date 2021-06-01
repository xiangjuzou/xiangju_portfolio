const Contact = () => {
    return ( 
   <>
   <div>
    <h1 claaName="Contact_verhaal">Contact me</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
         printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
     </div>

     <div className='form'>
         <label for='VoorName'>Name</label>
         <input type='text' id="voorName"></input>
         <label for='achterName'>achterName</label>
         <input type='text' id="name"></input>
         <label for='telefoon'>Telfoon</label>
         <input type='number' id="telfoon"></input>
         <label for='email'>Email</label>
         <input type='email' id="email"></input>
         <label for='message'>Message</label>
         <input type='textarea' id="message"></input>
         <button>Send</button>
     </div>



    </>
     );
}
 
export default Contact;