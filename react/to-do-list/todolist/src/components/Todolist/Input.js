import React from 'react'
import InputText from './InputText'
import InputColor from './InputColor'
import InputButton from './InputButtons'
import '../../style/Input.css'


function Input(props) {
    return (
        <div className="jumbotron jumbotron-fluid d-flex flex-column align-items-center input-container">
            <InputText />
            <InputColor />
            <InputButton />
        </div>
    )
}





export default Input;

