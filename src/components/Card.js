import React from 'react';
import plane from '../assets/images/favicon.ico';

const Card = ({ price, imgUrl, id, stayId, description, scale, link }) => {
    return <div className='layoutCard'>
        <div>
            <img src={imgUrl} width='300'>
            </img></div>
        <div className='elements'>


            <img src={plane} className='elementPlane'></img>

            <span className='elementScale'>Directo </span>

            <span className='elementSale'>Precio desde</span>
            <div className='clearfloat'></div>
            <h3 className='elemenPrice'>{price}</h3>

            <h3 className='elementDescription'>{description}</h3>
            
            <span className='elemenfly'>Ver Vuelo</span>
        </div>

    </div >
}

export default Card;