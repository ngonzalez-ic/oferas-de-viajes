
import React from 'react';
import { render} from 'react-dom';
import App from '../components/App';
import '../assets/favicon.ico';
import logo from '../assets/logo.png';
import font from '../assets/fonts/Roboto-Medium.ttf';
import title from '../assets/scss/global.scss'
render (
<div>
    <div  className ="titulo"> 
        <img src={logo}></img>
        <span>Viajar es la guita mejor invertida</span>
    </div>
    <div className="subtitle">
        <span>Los vuelos mas baratos para tu estadia en miami</span>
    </div>
    <div></div>
    <div className="subtitle">
        <span>Los vuelos destacados en todas las estadias</span>
    </div>

    <h1>app</h1>
    <App/>
    </div>,
    document.getElementById ('app')
    )

