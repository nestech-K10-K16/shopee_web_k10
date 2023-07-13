import React from 'react';
import AppButton from '../Appbutton'
import "./style.css"

const CustomInput = ({ width, placeholder, icon, value, onchange, ...reset }) => {
    return (
        <div class="container-customInput">
            <div class="container-customInput__icon">
                <AppButton>
                    {icon}
                </AppButton>
            </div>
            <input
                style={{ width: width }}
                value={value}
                onchange={onchange}
                placeholder={placeholder}
                class="container-customInput__feild-content"
                {...reset}
            ></input>
        </div>

    )
}

export default CustomInput