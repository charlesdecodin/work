import React, { useContext } from 'react'
import Context from './Context'
import '../../style/InputColor.css'

export default function InputColor() {
    const context = useContext(Context)
    const getColor = (e) => {
        context.setItem({
            ...context.item,
            color: e.target.value

        })
    }
    return (
        <div className="d-flex ">
            {/* first radio */}
            <div className="form-check mx-3 first-radio">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="#E7425D" onChange={getColor} />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    Important
                </label>
            </div>
            {/* second radio */}
            <div className="form-check mx-3 second-radio">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="#E77A42" onChange={getColor} />
                <label className="form-check-label" htmlFor="exampleRadios2">
                    Normal
                </label>
            </div>
            {/* third radio */}
            <div className="form-check mx-3 third-radio">
                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="#E7CC42" onChange={getColor} />
                <label className="form-check-label" htmlFor="exampleRadios3">
                    Secondaire
                </label>
            </div>
        </div>
    )
}
