import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { IC_arrow_down } from '../../assets';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "./style.css"

const DropDown = ({ title, onItemClick }) => {

    const renderMenubutton = () => {
        return <MenuButton
            className={'dropdown-btn'}>
            <p className='text-font-family_default text-body-medium text-color-black'>{title}</p>
            <img src={IC_arrow_down} />
        </MenuButton>
    }

    return (
        <Menu
            menuClassName={'container-dropdown-item'}
            menuButton={renderMenubutton}
            onItemClick={onItemClick}
            transition
        >
            <MenuItem value={'Cut'}>Cut</MenuItem>
            <MenuItem value={'Copy'}>Copy</MenuItem>
            <MenuItem value={'Paste'}>Paste</MenuItem>
        </Menu>
    )
}

export default DropDown