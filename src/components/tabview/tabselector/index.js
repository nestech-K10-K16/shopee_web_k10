import React from 'react'
import AppButton from '../../Appbutton'
import './style.css'

const Tabselector = ({
    children,
    isActive = false,
    onClick
}) => {

    return (
        <AppButton
            onClick={onClick}
            id='tab-selector'
            className={`text-font-family_default text-heading3 ${isActive
                ? 'text-color_black boder-color-black'
                : 'text-color-dark-gray'
                }`}
        >
            {children}
        </AppButton>
    )

}

export default Tabselector