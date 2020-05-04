import React, { useContext } from 'react'
import Context from './Context'

export default function ButtonList(props) {

    const context = useContext(Context)


    const updatingItem = (id) => {
        /*  context.setArrItem(context.arrItem.splice(index, 1, props.updateItem))
         context.setArrItem([...context.arrItem]) */
        fetch(`http://localhost:4000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: props.updateItem.text
            })
        }).then(context.fetchData)

    }
    return (
        <button style={props.toggle ? { display: "none" } : { display: "block" }} onClick={() => updatingItem(props.keyInd.id)}>Remplacer</button>
    )
}
