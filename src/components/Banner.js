import React from 'react';
import Flycard from './Flycard';
let FlycardUnit = { bestPrice: 2800000, label: 'viaja por 7 dias' };
let FlycardList = [FlycardUnit,FlycardUnit,FlycardUnit,FlycardUnit,FlycardUnit];
const Banner = () => {
    return <div className="banner">
        <div className='subtitle'><h3>Los vuelos mas baratos para estadia en<span  > Miami</span></h3></div>


        <br />
        <div className="flycard">    {FlycardList.map(
            //todo dento de los () es un a funcion => 
            element => {
                return <Flycard
                    label={element.label}
                    bestPrice={element.bestPrice}
                />
            }
        )}</div>


    </div>
}
export default Banner;