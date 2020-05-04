import React from 'react'

export default function InputList(props) {

    const updateInput = e => {
        props.setUpdateItem({
            text: e.target.value,
            color: props.item.color
        })
    }

    return (
        <input style={props.toggle ? { display: "none" } : { display: "block" }} type="text" onChange={updateInput} />
    )
}
