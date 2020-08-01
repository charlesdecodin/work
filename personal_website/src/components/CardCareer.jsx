import React, { useState, useEffect } from 'react'
import '../style/CardCareer.css'

export default function CardCareer({ setToggle, toggle, setStyleCardSkill, setStyleLogoLanguage}) {
    const [styleCardCareer, setStyleCardCareer] = useState({})
    const [styleDivCardCareer, setStyleDivCardCareer] = useState({ display: "none" })


    const showCareer = () => {
        setToggle(!toggle)
       
        if (window.innerWidth > 730) {
            if (!toggle) {
                setStyleCardCareer({
                    animationName: "drop-up",
                    animationDuration: ".6s"
                })
                setStyleCardSkill({
                    animation: "slide-left .3s",
                })
                setTimeout(() => {
                    setStyleDivCardCareer({
                        display: "block"
                    })
                }, 300)
            } else {
                setStyleCardCareer({
                    animationName: "drop-down",
                    animationDuration: ".3s"
                })
                setStyleCardSkill({
                    animation: "slide-right .6s",
                })
                setStyleDivCardCareer({
                    display: "none"
                })
            }
        }else{
            if(!toggle){
                setStyleDivCardCareer({
                    display: "block"
                })
            }else{
                setStyleDivCardCareer({
                    display: "none"
                })
            }
        }
        if (window.innerWidth < 1456){
            if(toggle){
                setStyleLogoLanguage({
                    animationName: "zoom",
                    animationDuration: ".6s"
                })
            }else{
               setStyleLogoLanguage({
                    animationName: "zoom-out",
                    animationDuration: ".3s"
                })
            }
        }


    }

    return (
        <a href="#title" onClick={showCareer} className={toggle ? "card career career-up" : "card career career-down"} style={styleCardCareer}>
            <h3 id="title">PARCOURS</h3>
            <div style={styleDivCardCareer}>
                <div>
                    <h4>FORMATION</h4>
                    <p><span>2020</span> <span>Formation développeur full-stack, AFPA</span></p>
                    <p><span>2015</span> <span>Baccalauréat économique et social</span></p>
                </div>

                <div>
                    <h4>EXPERIENCES</h4>
                    <p><span>2020</span> <span>Stage, Servive informatique | Siloge |</span><span> 2 semaines</span></p>
                    <p><span>2017</span> <span>Ouvrier de production, Préparateur de commandes | Intérim & V2D |</span><span> 1 an et 6 mois</span></p>
                    <p><span>2016</span> <span>Serveur | traiteurs Lecocq, Chef chez soi, Yanka |</span><span> 3 mois</span></p>
                    <p><span>2016</span> <span>Agent d'entretien | Lille Métropole Habitat |</span><span> 3 mois</span> </p>
                </div>

            </div>
        </a>
    )
}
