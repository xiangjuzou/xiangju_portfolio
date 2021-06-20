import  {Container} from 'react-bootstrap';

const Home = () => {
    return ( 
 <>
<div id='home_animation' className='text-center my-5'>
<h1 id='home_nl'> HALLO</h1>
<h1 id='home_cn'> 你好 </h1>
<h1 id='home_en'> HELLO</h1>
</div>

<div id='home_banner'>
  <Container>
    <div style={{height:'89vh'}} className='d-flex flex-column align-items-center justify-content-center'>
      <div id='home_text'>
        <p className='pb-5 mr-5 font43'>Ik ben Xiangju Zou, een enthousiaste <br/>front-end software developer.</p>
        <p className='pb-5 mr-5 font34'>Met kennis van HTML5, CSS3, Bootstrap, Javascript,<br/> React, Git en Scrum wil ik graag websites of<br/>web applications ontwikkelen.  </p>
      </div>
     <a href="/overMe" className='home_link' > <button style={{border: '1px solid red'}}  className=' px-3 py-2'>leren kennen</button></a> 
    </div>   
  </Container>
</div>


</>
     );
}
  
export default Home;