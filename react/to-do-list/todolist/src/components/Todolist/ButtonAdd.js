import React, { useContext } from 'react'
import Context from './Context'
import { v4 as uuidv4 } from 'uuid'
import '../../style/ButtonAdd.css'
export default function ButtonAdd() {

    const context = useContext(Context)


    const createItem = () => {
        /* context.setArrItem([...context.arrItem, context.item]) */
        fetch('http://localhost:4000/todos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(context.item)
        }).then(context.fetchData)
        context.setItem({
            ...context.item,
            text: "",
            id: uuidv4()
        })
    }


    return (
        <button className="btn btn-add" onClick={createItem}>Nouvelle Tâche</button>
    )
}
