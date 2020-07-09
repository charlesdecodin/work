import React, { useState, useEffect } from 'react'
import '../style/CardCareer.css'

export default function CardCareer({setToggle, toggle}) {



    const showCareer = () => {
        setToggle(!toggle)
    }

    return (
        <div onClick={showCareer} className={toggle?"card career career-up": "card career career-down"}>
            <p>Parcours</p>
        </div>
    )
}
