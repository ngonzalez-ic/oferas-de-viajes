import React from 'react';
import Flycard from './Flycard';
let FlycardUnit={cto:'juanito'};
let FlycardList=[FlycardUnit,FlycardUnit,FlycardUnit];
const Banner = ()=>{
    return <div className={"banner"}>
    <span>este es el banner de algo</span>

    <br/>
    {FlycardList.map(
        //todo dento de los () es un a funcion => 
        element =>{
            return <Flycard cto={element.cto}/>
        }
    )}
    
       </div>
}
export default Banner;