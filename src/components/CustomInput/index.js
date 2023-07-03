import React from 'react';
import AppButton from "../Appbutton";
import "./style.css"

const CustomInput = ({ placeholder }) => {
    return (
        <div class="container-CustomInput">
            <div class="container-CustomInput__icon">
                <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <input placeholder={placeholder} class="container-CustomInput__input"></input>
        </div>
    )
}

export default CustomInput