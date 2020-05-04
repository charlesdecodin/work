import React, { useContext } from 'react'
import Context from './Context'
import '../../style/InputText.css'

export default function InputText() {

    const context = useContext(Context)

    const updateText = (e) => {
        context.setItem({
            ...context.item,
            text: e.target.value
        })

    }
    return (
        <input className="form-control form-control-lg w-50  input-text" type="text" onChange={updateText} value={context.item.text} />
    )
}
