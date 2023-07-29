import React from 'react'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import { IC_arrow_down } from '../../assets';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "./style.css"
import { DROP_DONW_TYPE, CALCULATE_SHIPPING_DROP_DOWN } from '../../constants/common';

const DropDown = ({ type = DROP_DONW_TYPE.DEFAULT, title, onItemClick, width, height }) => {

    const renderMenubutton = (praTitle) => {
        return <MenuButton
            style={{ width: width, height: height }}
            className={'dropdown-btn'}>
            <p className='text-font-family_default text-body-medium text-color-black'>{praTitle}</p>
            <img src={IC_arrow_down} />
        </MenuButton>
    }

    const renderMenuItem = () => {
        switch (type) {
            case DROP_DONW_TYPE.DEFAULT:
                return <>
                    <MenuItem value={'Cut'}>Cut</MenuItem>
                    <MenuItem value={'Copy'}>Copy</MenuItem>
                    <MenuItem value={'Paste'}>Paste</MenuItem>
                </>
            case DROP_DONW_TYPE.CALCULATE_SHIPPING:
                return <>
                    {
                        CALCULATE_SHIPPING_DROP_DOWN.map((e) => {
                            return <Menu
                                menuClassName={'container-dropdown-item'}
                                menuButton={() => renderMenubutton(e.label)}
                                onItemClick={onItemClick}
                                transition
                            >
                                <MenuItem value={'Cut'}>{'Cut'}</MenuItem>
                                <MenuItem value={'Copy'}>{'Copy'}</MenuItem>
                                <MenuItem value={'Paste'}>{'Paste'}</MenuItem>
                            </Menu>
                        })
                    }
                </>
        }
    }

    return (
        <Menu
            menuClassName={'container-dropdown-item'}
            menuButton={() => renderMenubutton(title)}
            onItemClick={onItemClick}
            transition
        >
            {renderMenuItem()}
        </Menu>
    )
}

export default DropDown