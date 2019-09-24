import React from 'react';
import { useFetch } from "./HookCard";
const url = 'https://api.graph.cool/simple/v1/cjtk3okib547g0182680rna24'
const query = `{  allStayDatas(filter:
  {
 label_starts_with:""}){
    label,bestPrice,id,customId
  }
}`
const Conection = () => {
  const [data, loading] = useFetch(
    url, query
  );

  
  return <div >
  {
    loading ? (
      "Loading..."
    ) : (
      
        'anda'
      )
  }
  </div>
}

export default Conection;


