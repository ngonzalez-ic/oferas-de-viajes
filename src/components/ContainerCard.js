import React from 'react';
import Card from './Card';
let CardUnit={price:'00',imgUrl:'http://localhost:8080/src/assets/images/logo.jpg',id:'01',stayId:'03',description:'02'};
let CardList=[CardUnit,CardUnit,CardUnit,CardUnit];

const ContainerCards =() =>{
return <div className='containercard'>
    <span>Esto es el contenerdo de algo</span>
    <br/>
     {CardList.map(
       elementCard=>{
           return<Card
            id={elementCard.id}
            price={elementCard.price}
            imgUrl={elementCard.imgUrl}
           />
       }
    )}
</div>
}
export default ContainerCards;
