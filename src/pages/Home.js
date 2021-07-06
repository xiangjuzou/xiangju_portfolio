import  {Container} from 'react-bootstrap';

const Home = () => {
    return ( 

  <div id='home_content'>
    <div id='home_animation' className='text-center'>
       <h1 id='home_nl'> HALLO</h1>
        <h1 id='home_cn'> 你好 </h1>
      <h1 id='home_en'> HELLO</h1>
  </div>

<div id='home_banner' className='d-flex flex-column justify-content-center'>
  <Container>
    <div className='d-flex flex-column align-items-center'>
      <div id='home_text'>
        <p className='pb-5 font43'>Ik ben Xiangju Zou, een enthousiaste <br/>front-end software developer.</p>
        <p className='pb-5 font34'>Met kennis van HTML5, CSS3, Bootstrap, Javascript,<br/> React, Git en Scrum ontwikkel ik websites en<br/>web applications.  </p>
      </div>
     <a href="/OverMij" target="_blank" className='home_buttonlink btn px-3 py-2'>Leren kennen</a> 
    </div>   
  </Container>
</div>

</div>
     );
}
  
export default Home;