import React,{useContext} from 'react';
import { Context } from "../store/index";


const Flycard = ({ bestPrice, label, id, customId }) => {
    const { store, dispatch } = useContext(Context);

    return <button className='estadia' onClick={()=>{
        dispatch({type:'setCurrent',customId:customId})
    }}>
        <div className= 'label'>
            <p>{label}</p>
        </div>
        <div className='bestPrice'>
            <p>desde $ {bestPrice}</p>
        </div>
    </button>
}
export default Flycard; 