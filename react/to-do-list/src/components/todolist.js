import React, { useState } from 'react'

function List(props) {
    const deleteItem = index => {
        props.importerSetItems(props.importerItems.splice(index, 1))
        props.importerSetItems([...props.importerItems])
    }


    return (
        props.importerItems.map((item, index) =>
            <div className=" alert-warning p-3 m-3 d-flex justify-content-between" key={index}>
                <span>{item}</span>
                <span style={{ cursor: "pointer" }} onClick={() => deleteItem(index)}>x</span>
            </div >
        ))
}

export default List;