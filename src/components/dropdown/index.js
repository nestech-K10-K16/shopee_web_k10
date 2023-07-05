import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "./style.css"

const DropDown = ({ title }) => {

    const renderMenubutton = () => {
        return <MenuButton
            className={'dropdown-btn'}>
            <p className='text-font-family_default text-body-medium text-color_black'>{title}</p>
            <i class="fa-solid fa-chevron-down"></i>
        </MenuButton>
    }

    return (
        <Menu
            menuClassName={'container-dropdown-item'}
            menuButton={renderMenubutton}
            transition
        >
            <MenuItem>Cut</MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
        </Menu>
    )
}

export default DropDown