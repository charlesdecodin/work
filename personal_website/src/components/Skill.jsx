import React, {useState} from 'react'

export default function Skill({image, titleText, setContent, bodyText, content, colorTitle}) {
    const toggleText = () =>{
        setContent({
            title: titleText,
            body: bodyText,
            color: colorTitle
        })    
    }

    return (
        <div onClick={toggleText} className={content.title === titleText? 'selected': '' }>
            <img src={image} alt="" />
        </div>
    )
}
