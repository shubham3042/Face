import React from 'react';
import './serchbar.css';
const Serchbar=({oninputchange ,onclick})=>
{
    return(
        <div className="tc">
            <p className="f3 tc">
        {'the magic Brain will detect your face in you pic'}
            </p>
            <div className="center">
               <div className="center form pa4 br3 shadow-5"  >
                <input  className="f4 pa2 w-70 tcx center" type="tex" onChange={oninputchange} />
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-red center" onClick={onclick}>detect</button>
                </div>
            </div>
        </div>
    )
}
export default Serchbar;