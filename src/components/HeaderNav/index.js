import React from 'react';


import './index.css';
import PhotoEmail from '../../images/Photo.jpg';
import Youtube from '../../images/youtube.png';
import Menu from '../../images/menu tres lineas.png';
import { a } from 'react-router-dom';

class HeaderNav extends React.Component {
    render(){
        return (
        
        <div className="header">
            <div className="information">
                <img className="information-Menu" src={Menu} alt="Menu three line"/>
                <img className="information-Youtube" src={Youtube} alt="Logo Youtube"/>
            </div>     
            <nav>
                <ul className="nav-rigth-section">
                    <li><a href="https://www.google.com/intl/es/gmail/about/">Correo</a></li>
                    <li><a href="https://www.google.com.co/imghp?hl=es-419&tab=wi&authuser=0&ogbl">Imagenes</a></li>
                    <li className="menu-icon"> <a href="/"></a></li>
                    <li><a href="/"><img src={PhotoEmail} aria-hidden alt="Picture of me taking a photo of an image"/></a></li>
                </ul>
            </nav>
        </div>
        )
    }
}

export default HeaderNav;