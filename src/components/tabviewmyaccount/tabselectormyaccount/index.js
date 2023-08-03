import React from 'react'
import AppButton from '../../Appbutton'
import "./style.css"

const TabselectorMyAccount = ({
    children,
    isActive = false,
    onClick
}) => {

    return (
        <AppButton
            onClick={onClick}
            id='Tabselector-MyAccount'
            className={`text-font-family_default text-heading3 text-color-black ${isActive
                ? 'Tabselector-MyAccount-active'
                : ''
                }`}
        >
            {children}
        </AppButton>
    )
}

export default TabselectorMyAccount