import { WiCloudy } from "react-icons/wi";
import { WiDayCloudy } from "react-icons/wi";
import { WiRainMix } from "react-icons/wi";
import { WiDaySunny} from "react-icons/wi";
import { WiDayLightning} from "react-icons/wi";
import { WiSnow} from "react-icons/wi";
import { WiFog} from "react-icons/wi";

const WeerIcon = (props) => {
    const icon = props.icon.substring(0,2);

    return (
        <>
            {icon === '01' && <WiDaySunny size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
            {icon === '02' && <WiDayCloudy  size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} />  }
            {icon === '03' && <WiCloudy size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
            {icon === '04' && <WiCloudy size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
            {icon === '09' && <WiRainMix size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
            {icon === '10' && <WiRainMix size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
            {icon === '11' && <WiDayLightning size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
            {icon ==='13' && <WiSnow size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
            {icon === '50' && <WiFog size ='3rem' style={{color:'rgba(59, 89, 152,0.7 )'}} /> }
        </>
    );
}
 
export default WeerIcon;
