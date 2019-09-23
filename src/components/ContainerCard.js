import React from 'react';
import Card from './Card';
let CardUnit = { price: '00', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', id: '01', stayId: '03', description: '7 dias convencion  2019' };
let CardList = [CardUnit,CardUnit,CardUnit,CardUnit];

const ContainerCards = () => {
    return <div className='containercard'>
            <h2>Vuelos destacados en <span>todas las estadias</span> </h2>


        <br />
        <div className='card'>
            {CardList.map(
                elementCard => {
                    return <Card
                        id={elementCard.id}
                        price={elementCard.price}
                        imgUrl={elementCard.imgUrl}
                        description={elementCard.description}
                    />
                }
            )}
            </div>
        
    </div>
}
export default ContainerCards;
