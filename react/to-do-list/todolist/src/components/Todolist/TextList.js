import React, { useState, useContext } from 'react'
import Context from './Context'
import InputList from './InputList'
import ButtonList from './ButtonList'

export default function TextList(props) {
    const [toggle, setToggle] = useState(true)
    const context = useContext(Context)
    const deleteItem = (id, index) => {
        /* context.setArrItem(context.arrItem.filter((item, i) => i !== index)) */
        fetch(`http://localhost:4000/todos/${id}`, {
            method: "DELETE"
        }).then(context.fetchData)
    }

    const toggleInput = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <p><span onClick={() => toggleInput(props.index)}>{props.keyInd.text}</span><span onClick={() => deleteItem(props.keyInd.id, props.index)}>&#10006;</span></p>
            <InputList
                setUpdateItem={props.setUpdateItem}
                item={props.item}
                toggle={toggle}
            />
            <ButtonList
                item={props.item}
                updateItem={props.updateItem}
                keyInd={props.keyInd}
                toggle={toggle}
            />
        </div>
    )
}
