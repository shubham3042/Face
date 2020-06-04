import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './logo.png';
const Logo=()=>
{
   return(
   <div>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 ,marginLeft:'20px' }} >
    <div className="tc pa3"> <img src={brain} alt="brain" /> </div>
   </Tilt>
   </div>
   ) 
}
export default Logo;