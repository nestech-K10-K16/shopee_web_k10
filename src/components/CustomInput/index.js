import React from 'react';
import AppButton from '../Appbutton'
import { INPUT_TYPE } from '../../constants/common';
import "./style.css"

const CustomInput = ({
    type = INPUT_TYPE.DEFAULT,
    label,
    width,
    height,
    placeholder,
    icon,
    value,
    onchange,
    ...reset
}) => {

    const renderTypeButton = () => {
        switch (type) {
            case INPUT_TYPE.DEFAULT:
                return <></>
            case INPUT_TYPE.ICON:
                return <div class="container-customInput__icon">
                    <AppButton>
                        {icon}
                    </AppButton>
                </div>
            case INPUT_TYPE.HAVE_LABEL:
                return <p className='text-font-family_default text-body-medium text-color-dark-gray'>{label}</p>
            default:
                return <></>
        }
    }

    return (
        <div class="container-customInput">

            {renderTypeButton()}
            <input
                style={{ width: width, height: height }}
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