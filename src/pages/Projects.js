import  {Container, Row, Col} from 'react-bootstrap';
import React, { Fragment } from 'react';

const Project = (props) => {
    return  (
        <Container className='mb-4'>
        <Row>
            <Col>
                <h4 className='my-4'>{props.title}</h4>   
            </Col>
        </Row>
        <Row className='mb-4' >
            <Col sm={12} md={12} xl={5} >
                <img src={'../images/' +props.mainimg} alt='main' className="mb-4" />
                <h4 className="mb-4" id='subtitel'>{props.subtitle}</h4>       
            </Col>
            <Col sm={12} md={6} xl={4} className='my-4 px-2'> 
                <h5 className='mb-4'>Info:</h5>
                {props.info}
            </Col>
            <Col sm={12} md={6} xl={3} className='my-4 px-3'> 
                <h5 className='mb-4'>Technical:</h5>
                {props.technical} 
                {props.websitelink&&<a href={props.websitelink }  target='_blank'rel="noreferrer" className='px-3 py-2 btn my-4 mx-2' style={{border: '1px solid red'}}>Bezoek website</a>}
                {props.applink&&<a href={props.applink}  target='_blank' className='px-3 py-2 btn my-4 mx-2' style={{border: '1px solid red'}}>Bekijk APP</a>}
                {props.codelink&&<a href={props.codelink} target='_blank'  className='px-3 py-2 btn my-4 mx-2'style={{border: '1px solid red'}} >Bekijk code</a> }
            </Col>
        </Row>
    </Container>
    );
}

const Projects = () => {
    return ( 
      
    <Fragment>
    <Container id="title">
        <Row>
            <Col>
                <h1 className='pt-5'>PROJECTEN</h1>
            </Col>
        </Row>
      </Container>
        <div  className='project'>
            <Project 
                title="React landing website:"
                mainimg="qhome600x391.png"
                subtitle="Ontwikkeld voor Qmex B.V. die airco's en warmtepompen verkoopt."
               info={<p>Deze website is compleet op maat gemaakt naar wens van de klant. Ik legde mijn focus op de eigen huisstijl en gebruiksvriendelijkheid.
                   De content heb ik bij een CMS tool <a href="http://contentful.com" target="_blank" rel="noreferrer">Contentful</a> geplaatst. 
                   Om verschillende componenten vaker te gebruiken, zijn deze gemaakt met meerdere styling opties.
                  </p>}
                
                technical={<p>React, Javascript, CSS3, HTML5, Bootstrap, Git, Scrum, Visual studio, CMS tool Contentful</p>}
                websitelink="https://www.qmex.eu/" 
                codelink="https://github.com/xiangjuzou/QmexWebsite"
            />
            <Project 
                title="Weer APP:"
                mainimg="weerfoto.png"
                subtitle="Voorbeeld om het weer voor de komende week te zien."
                info={<p>Het voorbeeld laat het weer in Deventer zien. Ik koppelde de <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">Openweathermap</a> API met Chart.js.
                   Daarmee render ik een staafdiagrm op de pagina om de temperatuur te tonen. </p>}
               
                technical={<p>HTML5, CSS3, React, Bootstrap, Git, Visual studio code, webapi</p>}
                applink="/weer"
                codelink="https://github.com/xiangjuzou/weer_app" 
            />
            <Project 
                title="Uitgaven tracker:"
                mainimg="uitgaven1.png"
                subtitle="Applicatie om uw uitgaven en spaargeld bij te houden."
                info={<p>De gebruiker kan via deze APP hun uitgaven bijhouden. Verschillende classes, zoals UI class, ingevuld bericht (msg) class maakte mijn code overzichtelijker.
                    De waarden van de lijst zet ik in een array, daardoor kan ik de data beter bijhouden.</p>}
               
                technical={<p>HTML5, CSS3, Javascript, Bootstrap, Git, Visual studio code</p>}
                applink="/expense/expensetracker.html"
                codelink="https://github.com/xiangjuzou/uitgaven"
            />
            <Project 
                title="E-commerce website:"
                mainimg="wijn.png"
                subtitle="Een kaarsen website die via een e-commerce platform opgebouwd is."
               info={<div>Ik gebruikte het platform <a href="https://www.jouwweb.nl/" target="_blank" rel="noreferrer">Jouwweb</a> voor de webshop.
                     De juiste content, keywords, metatags en social media zorgen voor meer verkeer op de webshop.
                     Het visuele design en de functionaliteit zijn belangrijke aandachtspunten. 
                     </div>}
            
                technical={<p>Ontwikkelplatform Jouwweb, Corel paintshop pro </p>}
                websitelink="https://www.fralet.nl/" 
            />
         </div>
          </Fragment> 
     );
}
 
export default Projects ;