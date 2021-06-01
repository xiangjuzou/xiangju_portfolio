import  {Card} from 'react-bootstrap';
import FlipCard from './FlipCard';
import React, { Component,  Fragment } from 'react';

const Overme  = () => {
return ( 
 <Fragment>
  <div>
   <p> Click en ontdek 6 random feiten over mezelf</p>
   <FlipCard url='' vraag='Lievelingsgerecht?' antwoord='Hopot'></FlipCard>
   <FlipCard url='' vraag='Lievelingsliedje?' antwoord='Because of you'></FlipCard>
   <FlipCard url='' vraag='Onvergetlijk holiday?' antwoord='wanderlen in Frankrijk'></FlipCard>
   <FlipCard url='' vraag='Hond of poesje?' antwoord='Hond'></FlipCard>
   <FlipCard url='' vraag='winter of zomer' antwoord='Zomer'></FlipCard>
   <FlipCard url='' vraag='lievelings APP?' antwoord='Youtube'></FlipCard>
   </div>
   

   <div>
   <CollapseVerhaal></CollapseVerhaal>

   </div>


</Fragment>

     );
}
 
export default Overme ;