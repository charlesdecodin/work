import React, { useState, useEffect } from 'react'
import '../style/CardCareer.css'

export default function CardCareer({setToggle, toggle}) {



    const showCareer = () => {
        setToggle(!toggle)
    }

    return (
        <a href="#title" onClick={showCareer} className={toggle?"card career career-up": "card career career-down"}>
            <h3 id="title">PARCOURS</h3>
        </a>
    )
}
