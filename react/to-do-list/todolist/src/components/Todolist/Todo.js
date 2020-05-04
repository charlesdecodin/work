import React, { useState, useEffect } from 'react'
import Input from './Input'
import List from './List'
import Context from "./Context"
import { v4 as uuidv4 } from 'uuid'


export default function Todo() {

    const [arrItem, setArrItem] = useState([])
    const [item, setItem] = useState({
        text: "",
        color: "orange",
        id: uuidv4()
    })

    const fetchData = async () => {
        const reponse = await fetch('http://localhost:4000/todos');
        const data = await reponse.json()
        setArrItem(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const context = {
        item,
        arrItem,
        setItem,
        setArrItem,
        fetchData
    }

    return (
        <Context.Provider value={context}>
            <div>
                <Input />
                <div className="d-flex flex-column align-items-center">
                    <List />
                </div>

            </div>
        </Context.Provider>
    )
}
