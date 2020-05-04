import React, { useContext } from 'react'
import ButtonAdd from './ButtonAdd'
import Context from './Context'
import '../../style/inputButtons.css'

export default function InputButton() {

    const context = useContext(Context)


    const deleteAll = () => {
        context.arrItem.map((item) => {
            return (
                fetch(`http://localhost:4000/todos/${item.id}`, {
                    method: "DELETE"
                }).then(context.fetchData))
        })

    }


    return (
        <div>
            <ButtonAdd />
            <button className="btn btn-delete m-4" onClick={deleteAll}>Supprimer la liste</button>
        </div>
    )
} 
