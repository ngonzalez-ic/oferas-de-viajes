import React from 'react';

const Card =({price,imgUrl,id,stayId,description,scale,link})=>{
return <div className='card'>
    <img src= {imgUrl}></img>
    <h3>{price}</h3>
</div>
}

export default Card ;