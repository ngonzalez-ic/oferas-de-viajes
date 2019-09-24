import React, { useContext, useState } from 'react';
import { Context } from "../store/index";

const { request } = require('graphql-request')

const url = 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24'


import Card from './Card';




const cardQuery = (parametro) => {
    if (parseInt(parametro,10) === 0) {
        return `{  allCards
            {    
            price,scale,link,imgUrl,id,stayId,description
            }
          }`;
    } else {
        return `{
            allCards(filter:{ stayId:"${parametro}" }){
              link,
              description,
              price,
              stayId,
              imgUrl
              }
          }`
    }
}

const ContainerCards = () => {

    const { store } = useContext(Context);
    const [LocalCustomId, setLocalCustomId] = useState(99);
    const [locaData, setLocalData] = useState([]);

    const [isloading, setIsLoading] = useState(false);

    if (parseInt(LocalCustomId, 10) !== parseInt(store.CurrentStay, 10)) {
       
        setLocalCustomId(parseInt(store.CurrentStay, 10));
       
        if (isloading == false) {
            const requestCard = async () => {
                setIsLoading(true)
                const response = await request(url, cardQuery(store.CurrentStay))
                setLocalData(response)
                setIsLoading(false)
            }
            requestCard()
        }
    }
                

    return <div className='containercard'>
        <h2>Vuelos destacados en <span>todas las estadias</span> </h2>


        <br />
        <div className='card'>
            {locaData && locaData.allCards && locaData.allCards.map(
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
