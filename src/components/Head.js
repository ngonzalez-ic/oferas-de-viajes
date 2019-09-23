import React from 'react';
import logo from '../assets/images/logogris.jpg';

const head=()=>{

    return <div className='head'>
        <div className='logo'>
            <img src={logo}></img>
           
        </div>
        <div> <span>el titulo de algo</span></div>

    </div>
}

export default head;