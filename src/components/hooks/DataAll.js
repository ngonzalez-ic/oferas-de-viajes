import React from 'react';
import { useFetch } from "./HookCard";
const url = 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24'
const query = `{  allCards
  {    
  price,scale,link,imgUrl,id,stayId,description
  }
}`
const Conection = () => {
  const [data, loading] = useFetch(
    url, query
  );

  {
    loading ? (
      "Loading..."
    ) : (
        'ya anda'
      )
  }
  return <div >

  </div>
}

export default Conection;


