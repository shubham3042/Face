import React from 'react';
import './box.css';

const Facerecornization=({imgid,boxes})=>
{
  
    return(
        <div className="center ma">
            <div className="absolute mt" >
                <img src={imgid} id="inputimg" alt=" " width="500px" height="auto"/>
             
            { boxes.map(box=><div className="bbox" style={{top:box.toprow,right:box.rightcol,bottom:box.bottomrow,left:box.leftcol}}></div>)
            //   <div className="bbox" style={{top:box.toprow,right:box.rightcol,bottom:box.bottomrow,left:box.leftcol}}></div>
             }
              </div>
        </div>
    )
}
export default Facerecornization;
