import React, { useState } from 'react'


function Input(props) {
    const [txt, setTxt] = useState('');

    const getInput = (event) => {
        setTxt(event.target.value)
    }
    const deleteItems = () => {
        props.getItems([])
    }



    return (
        <div className="container-fluid bg-dark text-center p-5 d-flex flex-column ">
            <textarea className="m-4" type="text" onChange={getInput} value={txt} />

            <div className="d-flex flex-row justify-content-center mb-4">
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="#E35F75" />
                    <label className="form-check-label text-white mx-3" htmlFor="exampleRadios1">
                        Important
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="#E38B5F" />
                    <label className="form-check-label text-white mx-3" htmlFor="exampleRadios2">
                        Normal
                        </label>
                </div>
                <div className="form-check disabled">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="#E38B5F" />
                    <label className="form-check-label text-white mx-3" htmlFor="exampleRadios3">
                        Secondary
                        </label>
                </div>
            </div>
            <div className="btn-group align-self-center">
                <button className="btn btn-secondary " onClick={() => props.exporter(txt, setTxt)}>
                    New item
                </button>
                <button className="btn btn-secondary" onClick={deleteItems}>
                    Delete All
                </button>
            </div>
        </div>



    );
}

export default Input;