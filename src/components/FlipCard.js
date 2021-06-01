const FlipCard  = ( {url, vraag, antwoord}) => {
    return (
<div className='card'>
    <div className='inner'>
     <div className='front'>
     <img src = '{src}'  alt='' style={{width:'300px', height:'300px'}}></img> 
      </div>

      <div className="back">
      <h1>{Vraag}</h1>
      <p>{antwoord}</p>
      </div>
    </div>
    </div>


      );
}
 
export default FlipCard;