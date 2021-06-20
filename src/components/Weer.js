import React, { useState, useEffect } from 'react';
import  {Row, Col} from 'react-bootstrap';
import  Chart from 'chart.js/auto';
import  WeerIcon from "./WeerIcon.js";


const Weer = () => {
  const[error,setError]=useState(null);
  const[isLoading,setIsloading]=useState(false);
  const[data,setData]= useState(null);
  const coord = {lon:6.157511,lat:52.2489};

  useEffect( () =>{
    const abortCont = new AbortController();
   const lat= coord.lat;
   const lon = coord.lon;

   const APIkey=<KEY>;

   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`, {signal: abortCont.signal})
   .then(res => {
    if(!res.ok){
    throw Error('Could not fetch for that resource;')}
     return res.json();
    })

   .then(data =>{
    setIsloading(false);
    setData(data);
    setError(null);
    })
    .catch(err =>{
        if (err.name === 'AbortError'){
            console.log('fetch aborted')
        } else {
        setIsloading(false);
        setError(err.message);
        }
    })

    return () => abortCont.abort();
},[coord.lat, coord.lon]); 


const getColor = (temp, opacity) => {
    if (temp < 20) {return `rgba(54, 162, 235, ${opacity})`;}
    if (temp < 23)  {return `rgba(252, 202, 0, ${opacity})`;}
    return `rgba(255, 99, 132, ${opacity})`;
};


useEffect( () => {
    if (!data) {
         return;
    }

    const days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.daily.map(day => ( days[new Date(day.dt * 1000).getDay()])),
      datasets: [{
            label: 'Het weer in Deventer (volgens OpenWeathermap.org)',
            data: data.daily.map(day => day.temp.day),
            backgroundColor: data.daily.map(day => getColor(day.temp.day, 0.2)),
            borderColor: data.daily.map(day => getColor(day.temp.day,1)),
/*
            
            [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            */
            borderWidth: 1
        },
    ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });

    return () => {myChart.destroy();}
}, [data]);



return (
    <div>
    { isLoading && <div>Loading</div> }
    { error && <div> error</div> }

   <div className="chart-container mx-auto" >
    <canvas id="myChart"></canvas>
    <Row className="weer_row">
        <Col className="weer_1st"></Col>
        {data && data.daily.map( (item,i) => <Col key={i} className="text-center" style={{padding:'0px'}}><WeerIcon icon={item.weather[0].icon}/></Col>) }
    </Row> 
   </div>
</div>
);


}
 
export default Weer;
