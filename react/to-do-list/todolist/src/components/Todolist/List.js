import React, { useContext, useState } from 'react'
import TextList from './TextList'
import Context from './Context'
import '../../style/List.css'


function List() {

    const context = useContext(Context)



    const [updateItem, setUpdateItem] = useState({
        text: "",
        color: context.item.color,
        id: context.item.id
    })



    return (
        context.arrItem.map((item, index) =>
            <div className="w-75 m-3 container-todo" key={item.id} style={{ color: item.color }} >
                <TextList
                    index={index}
                    keyInd={item}
                    setUpdateItem={setUpdateItem}
                    item={context.item}
                    updateItem={updateItem}
                />

            </ div>
        )
    )
}

export default List;
