import  {Container, Row, Col} from 'react-bootstrap';
import React, { Fragment } from 'react';

const Project = (props) => {
    return  (
        <Container>
        <Row>
            <Col>
                <h4 className='my-4'>{props.title}</h4>   
            </Col>
        </Row>
        <Row className='mb-4' >
            <Col md={12} lg={12} xl={6}>
                <img src={'../images/' +props.mainimg} alt='main' className="mb-4" />
                <h5>{props.subtitle}</h5>       
            </Col>
            <Col md={12} lg={12}   xl={3}> 
                <h6 className='mb-4' >Uitdaging:</h6>
                {props.uitdaging}
            </Col>
            <Col md={12} lg={12} xl={3}  className='mb-4'> 
                <h6 className='mb-4'>Verbeter punten:</h6>
                {props.verbeter}
                <hr style={{borderTop:'1px #e6e6e6 solid'}}></hr>
                <h6 className='my-4'>Technical:</h6>
                {props.technical}
                {props.codelink&&<a href={props.codelink} className='px-3 py-2 btn'style={{border: '1px solid red'}} >Code</a> }
                {props.websitelink&&<a href={props.websitelink} className='px-3 py-2 btn' style={{border: '1px solid red'}}>Website</a>}
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
                <h1 className='py-4'>PROJECTEN</h1>
            </Col>
        </Row>
      </Container>
        <div  className='project'>
            <Project 
                title="React landing website:"
                mainimg="qhome600x391.png"
                subtitle="Ontwikkeld voor een bedrijf die airco's en warmtepompen naar de markt wil brengen."
                uitdaging={<p>De meeste content zet ik bij een CMS tool <a href="http://contentful.com">Contentful</a>. 
                            Hoe ga ik om met de data en de slug (urls) is een klus. 
                            Ik maakte ingewikkelkde keuzes door data per page gaan ophalen om Contenful minder vaak aan te roepen.
                            Om verschillende componenten vaker te gebruiken, schreef ik deze met meerdere styling opties.</p>}
                verbeter={<p> Ik had meer tijd moeten besteden aan het gesprek met de productower, zodat ik haar eisen beter begrijp. 
                            Daardoor kan ik de gewenste resultaat bij elke sprint leveren. Responsive website wordt voorzien van een 
                            huisstijl. Hoe maak ik een stijlvolle website moet ik nog leren.</p>}
                technical={<p>React, Javascript, CSS3, HTML5, Bootstrap, Git, Scrum, Visual studio, CMS tool Contentful</p>}
                codelink="https://github.com/xiangjuzou/QmexWebsite"
            />
            <Project 
                title="Uitgaven tracker:"
                mainimg="uitgaven1.png"
                subtitle="Applicatie om uw uitgaven, spaargeld per maand bij te houden."
                uitdaging={<p>Verschillende classes, zolas UI class, ingevuld bericht (msg)class maakte mijn code overzichtelijker.
                    De waarde van de lijst zet ik in een array, daardoor kan ik de data beter bijhouden. De betekenissen van OOP zijn
                    krachtig, als ik hem in de praktijk wil toepassen.</p>}
                verbeter={<p>Ik zou meer functions kunnen schrijven om de app uit te bereiden. Dan kunnen de gebruikers per maand of
                    per jaar hun uitgaven bijhouden. Daarnaast kan ik betere validatie code schrijven, die de app veiliger en gebruikersvriendelijker maakt.
                    Ook is er nu geen koppeling met een backend systeem om de data te bewaren.</p>}
                technical={<p>HTML5, CSS3, Javascript, Bootstrap, Git, Visual studio code</p>}
                codelink="https://github.com/xiangjuzou/uitgaven"
            />
            <Project 
                title="e-commerce website:"
                mainimg="wijn.png"
                subtitle="Een kaarsen website die via een e-commerce platform opgebouwd wordt."
                uitdaging={<div>Ik gebruikte het platform <a href="https://www.jouwweb.nl/">jouwweb</a> voor de webshop.
                               Corel paintshop pro voor de verwerking van alle afbeeldingen.  
                               Het creëren van een huisstijl met de keuzes in typografie, 
                               visualiteit en funcitonaliteit zijn even belangrijke aandachtspunten. 
                     </div>}
                verbeter="Een opvallend ontwerp die de doelgroep meer aan zou kunnen spreken. Ik zou beter met SEO kunnen omgaan, 
                          door betere keyword, meta, social media verkeer. zo trekt de website meer klanten aan."
                technical={<p>ontwikkelplatform jowweb, Corel paintshop pro </p>}
                websitelink="https://www.fralet.nl/"
            />
         </div>
          </Fragment> 
     );
}
 
export default Projects ;