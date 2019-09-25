import React from 'react'
import logo from '../assets/images/logo.jpg'

const head = () => {

    return <div className='head'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='title'>
            <span>Viajar es la guita mejor invertida</span>
        </div>
    </div>
}

export default head
