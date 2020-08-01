import React from 'react'
import photo from '../images/profil_photo.png'
import '../style/CardId.css';

export default function CardId() {
    return (
        <div className="card identity">
            <div className="container-image">
                <img src={photo} alt="profil" className="profil-image"/>
            </div>
            <h1 className="name"><span>DECODIN</span> <span>CHARLES</span></h1>
            <h2 className="work">DEVELOPPEUR WEB</h2>
        </div>
    )
}
