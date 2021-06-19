import  {Container, Row, Col} from 'react-bootstrap';
import FlipCard from '../components/FlipCard';
import React, {Fragment } from 'react';
import CollapseVerhaal from '../components/CollapseVerhaal';




const OverMe  = () => {

   const flipData = [
      { urllink: 'foodpot500x334.png', vraag:'Lievelingsgerecht', antwoord:'Hotpot'},
      { urllink: 'horse500x333.png', vraag:'Favoriete cabaretier', antwoord:"Youp van/'t Hek"},
      { urllink: 'bus500x334.png', vraag:'onmisbare apps', antwoord:'Youtube & Wechat'},
      { urllink: 'summer500x333.png', vraag:'winter of zomer', antwoord:'Zomer'},
      { urllink: 'sheep500x333.png', vraag:'katten of honden', antwoord:'hondenmens'},
      { urllink: 'summerKoe500x333.png', vraag:'Onvergetlijke holiday', antwoord:'Wandelen in Frankrijk'}
   ];

   const faqData = [ 
     { vraag:'Waarom woon je in Nederland?', verhaal:'Ik heb mijn Nederlanse man leren kennen,daarom kwam ik op tweede kerstdag in 2008 hier wonnen.'},
     { vraag:'Mis je jouw familie?', verhaal:'Ik mis ze heel veel, maar het is tegenwoordig makkelijk om contact te houden via het internet.'},
     { vraag:'Is het Nederlands moeilijk?', verhaal:'Ja, vooral de uitspraak. Het kostte me veel tijd om de taal te leren'},
     { vraag:'Wat zijn je sterkte punten?', verhaal:'Ik ben sociaal en kan me goed relativeren. Ik werk hard door om werk voor een deadline af te krijgen.'},
     { vraag:'Wat zijn je zwarke punten?',verhaal:'Ik moet aan mij zelfvertrouwen werkern en mijn doel scherp voor ogen houden. Goed uitdrukken in taal moet ik ook verbeteren.'},
     {vraag:'Wat doe je in je vrije tijd?', verhaal:'Wanderen in de natuur of een bezoek aan een museum brengen maken mijn leven kleurijker.Daarnaast ben ik gek op de architectuur van oude gebouwen.'}   
   ];

return ( 
 <Fragment>
   <div  className='bg-light mb-5'>
     <Container  >
      <Row  className='align-items-center'>
       <Col md={6} className='mb-4'>
          <h1 className='my-4'>Over Mezelf</h1>
          <p className="lead">Ik heb kennis van diverse front-end technieken en heb communicatieve vaardigden in Chinees, 
                 Engels en Nederlands. Ik ben een Flexibele team player met een leergierige, gemotiveerde houding.</p>

                 <h5 className='mt-5 pt-4'>Waar het allemaal is begonnen</h5>
           <p className='mb-5 mt-3 lead'>Na een lange omweg, heb ik mijn passie gevonden. Sinds Juni 2020 ben ik met mijn studie ICT begonnen. 
                Het komt doordat ik betrokken raakte bij het bouwen van de websites <a href="http://www.skeaks.com">www.skeaks.com</a> en <a href="http://www.wenxinchineseschool.nl">www.wenxinchineseschool.nl</a>. Daarnaast 
                heb ik meegeholpen met het verhuizen van de webshops van mijn vorige werkgever. Tijdens het realiseren van de webshop <a href="http://www.fralet.nl">www.fralet.nl</a>, 
                werd ik nog nieuwsgieriger. Toen besloot ik te studeren voor Front-end developer.</p>
       </Col>
       <Col md={4}>
          <img src='/images/mezelf.jpg' alt='mezelf' style={{width:'533px', height:'auto'}}/>
       </Col>
       </Row>

      <Row>
         <Col>
          <h5  >Wat ik doe</h5>
          <p className='mb-4 pt-3 lead'> Afgelopen tijd heb ik mezelf HTML5, CSS, Bootstrap, Javascript, React, scrum en Git aangeleerd. Op dit moment kan ik een website of simpele applicatie realiseren.
            Ik kan niet wachten om mijn carrière in de snel ontwikkelende ICT te maken, en ben zeer bereid om verder te leren.</p>                   
         </Col>
      </Row>
       </Container>
    </div>


  <Container>
   <h1 className='text-center my-5'>Ontdek random feiten over mezelf</h1>
   <Row>
      { flipData.map( (d,index) => <Col key={index} className='mb-3 ml-1' md={6} lg={4}>
                                 <FlipCard urllink={'/images/'+d.urllink} vraag={d.vraag+"?"} antwoord={d.antwoord} />
                              </Col>  )}
   </Row>
   </Container>
   
   <div className='my-5 py-5'>
        <h1 className='my-5 text-center'>Veelgestelde vragen </h1>
        { faqData.map ( (faq, index) =>  
           <CollapseVerhaal key={index} faq={faq}/>  
        )}
   
  </div>


</Fragment>

     );
}
 
export default OverMe ;