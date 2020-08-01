import React from 'react'
import '../style/CardMail.css'
import cross from '../images/cross.svg'

export default function CardMail({toggleMail, setToggleMail}) {
    
    const hideMail = () => {
        setToggleMail(false)
    }

    return (
        <div className={toggleMail? 'mail': 'hide'}>
            <div>
                <img onClick={hideMail} src={cross} alt=""/>
                <input placeholder="Nom Prénom" type="text" />
                <input placeholder="Adresse mail" type="email" />
                <input placeholder="Sujet" type="text" />
                <textarea />
                <button>Envoyer</button>
            </div>
        </div>
    )
}
