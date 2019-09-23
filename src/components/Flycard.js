import React from 'react';
let bestPrice = '0000';
let label = 'viaja por 7 dias';
let id = 0;
let customid = 0;
const Flycard = ({ bestPrice, label, id, customid }) => {
    return <button className='estadia'>
        <div className= 'label'>
            <p>{label}</p>
        </div>
        <div className='bestPrice'>
            <p>desde $ {bestPrice}</p>
        </div>
    </button>
}
export default Flycard; 