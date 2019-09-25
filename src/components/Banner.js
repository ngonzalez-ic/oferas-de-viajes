import React, { useContext, useState } from "react";
import { Context } from "../store/index";
import { useFetch } from "../components/hooks/HookCard";

const url = 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24'
const query = `{  allStayDatas(filter:
  {
 label_starts_with:""}){
    label,bestPrice,id,customId
  }
}`
import Flycard from './Flycard';





const Banner = () => {
    const { store } = useContext(Context);
    const [LocalCustomId, setLocalCustomId] = useState(0);
    const [data, loading] = useFetch(
        url, query
    );

    return <div className="banner">
        <div className='subtitle'><h3>Los vuelos mas baratos para estadia en<span  > Miami</span></h3>

            <br />
            <div className="flycard">    {data && data.allStayDatas && data.allStayDatas.map(
                (element, i) => {
                    return <Flycard
                        key={i}
                        label={element.label}
                        bestPrice={element.bestPrice}
                        customId={element.customId}

                    />
                }
            )}</div>

        </div>

    </div>
}
export default Banner;