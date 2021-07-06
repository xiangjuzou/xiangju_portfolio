import  {Container, Row, Col} from 'react-bootstrap';
import FlipCard from '../components/FlipCard';
import React, {Fragment } from 'react';
import CollapseVerhaal from '../components/CollapseVerhaal';


const OverMij  = () => {

   const flipData = [
      { urllink: 'foodpot500x334.png', vraag:'Lievelingseten', antwoord:'Hotpot'},
      { urllink: 'horse500x333.png', vraag:'Favoriete cabaretier', antwoord:"Youp van 't Hek"},
      { urllink: 'bus500x334.png', vraag:'Onmisbare apps', antwoord:'Youtube & Wechat'},
      { urllink: 'summer500x333.png', vraag:'Winter of zomer', antwoord:'Zomer'},
      { urllink: 'sheep500x333.png', vraag:'Katten of honden', antwoord:'Hondenmens'},
      { urllink: 'summerKoe500x333.png', vraag:'Onvergetelijke vakantie', antwoord:'Alleen backpacken in Yunnan'}
   ];

   const faqData = [ 
     { vraag:'Waar ben ik nou écht trots op?',
      verhaal:'Ik emigreerde van china naar nederland en heb hier een leven opgebouwd.'},
     { vraag:'Wat zijn je sterke punten?', 
     verhaal:'Mensen omschrijven me als iemand die betrouwbaar is, goed samenwerkt en altijd klaar staat voor anderen. Ik doe mijn werk met veel enthousiasme en weet van aanpakken.'},
     { vraag:'Wat zijn je zwakke punten?', 
    verhaal:'Ik moet aan mijn taalvaardigheid werken om beter te worden. Ik heb moeite met ruimtelijk inzicht, zoals schaken en ruimtelijke figuren.'},
     {vraag:'Wat doe je in je vrije tijd?', 
     verhaal:'Ik geniet volop van een museum, een wandeling in de natuur of een oude stad bezoeken. Ik breng ook graag tijd door met mijn vriendinnen om samen te koken of naar een sauna te gaan. Nu leer ik creatief naaien in een atelier. '}   
   ];

return ( 
 <Fragment>
   <div className='mb-4 mt-5'>
     <Container  >
      <Row className='align-items-center'>
       <Col md={7} className='mb-4 mx-2'>
          <h1 className='my-4'>Over Mezelf</h1>
          <p className="lead mb-5">Ik heb kennis van diverse front-end technieken en heb communicatieve vaardigheden in Chinees, 
                 Engels en Nederlands. Ik ben een flexibele team player met een leergierige, gemotiveerde houding.</p>

          <h3 className='my-4 pt-5'>Waar het allemaal is begonnen</h3>
          <p className='my-5 lead'>Na een lange omweg heb ik mijn passie gevonden. Sinds zomer 2020 ben ik met mijn studie ICT begonnen. 
                Het komt doordat ik betrokken raakte bij het bouwen van de websites <a href="http://www.skeaks.com" target="_blank">www.skeaks.com</a> en <a href="http://www.wenxinchineseschool.nl" target="_blank">www.wenxinchineseschool.nl</a>. Daarnaast 
                heb ik meegeholpen met het verhuizen van de webshops van mijn vorige werkgever. Tijdens het realiseren van de webshop <a href="http://www.fralet.nl" target="_blank">www.fralet.nl</a>, 
                werd ik nog nieuwsgieriger. Toen besloot ik te studeren voor Front-end developer.</p>
       </Col>

       <Col md={4} className='pl-5'>
          <img src='/images/map.png' alt='map' style={{width:'100%', height:'auto'}}/>
       </Col>
       </Row>

      <Row >
         <Col className='mt-5'>
          <h3 className='my-4' >Wat ik doe</h3>
          <p className='my-5 lead'> Afgelopen tijd heb ik mezelf HTML5, CSS, Bootstrap, Javascript, React, scrum en Git aangeleerd. Op dit moment kan ik een website of simpele applicatie realiseren.
            Ik kan niet wachten om mijn carrière in de snel ontwikkelende ICT te maken, en ben zeer bereid om verder te leren.</p>                   
         </Col>
      </Row>
       </Container>
    </div>

    <Container>
   <h1 className='text-center my-5 py-4'>Ontdek random feiten over mezelf</h1>
   <Row>
      { flipData.map( (d,index) => <Col key={index} className='mb-3'xs={12} md={6} lg={4}>
                                 <FlipCard urllink={'/images/'+d.urllink} vraag={d.vraag+"?"} antwoord={d.antwoord} />
                              </Col>  )}
   </Row>
   </Container>
   
   <div className='my-5 collapse_section'>
        <h1 className='my-5 py-4 text-center'>Veelgestelde vragen </h1>
        { faqData.map ( (faq, index) =>  
           <CollapseVerhaal key={index} faq={faq}/>  
        )}
  </div>


</Fragment>

     );
}
 
export default OverMij ;