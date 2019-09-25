import React from 'react'
import plane from '../assets/images/favicon.ico'

const Card = ({ price, imgUrl, id, stayId, description, scale, link }) => {
    return <div className='layoutCard'>
        <div>
            <a href='https://www.avantrip.com/' target='_blank'>
            <img src={imgUrl} width='300'height='300'></img></a>
            </div>
        <div className='elements'>
            <img className='elementPlane'src={plane}/>
            <span className='elementScale'>Directo </span>
            <span className='elementSale'>Precio desde</span>
            <div className='clearfloat'></div>
            <h3 className='elemenPrice'>{price}</h3>
            <h3 className='elementDescription'>{description}</h3>
            <div className='clearfloat'></div>
            <button className='elemenfly'>VER VUELO</button>
        </div>
    </div>
}

export default Card
