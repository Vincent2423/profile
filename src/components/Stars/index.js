import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.scss';

const Stars = ({nums}) =>{

    if(nums>5 || nums<0) return(<> N/A</>);
    
    let jsxtemp = [];
    //fullstars
    for(let i =1; i<=nums;i++){
        jsxtemp.push(<FontAwesomeIcon key={"fullstar"+i} icon={faStar} color="gold"/>);
    }
    //half star (floating point)
    if(nums % 1 !=0){
        jsxtemp.push(<FontAwesomeIcon key={"halfstar"} icon={faStarHalfStroke} color="gold"/>);
    }
    //ghost stars
    for(let i =Math.ceil(nums);i<5;i++){
        jsxtemp.push(<FontAwesomeIcon key={"ghoststar"+i} className="ghost-star" icon={faStar} color="grey"/>);
    }

    return(
        <>{jsxtemp}</>
    )
}

export default Stars
