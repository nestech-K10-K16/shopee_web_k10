import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import DropDown from '../dropdown';
import Switch from '../switch';
import { IC_search } from '../../assets';
import "./style.css"

const Sidebar = () => {

    const [onsale, setOnsale] = useState(false);
    const [instock, setInstock] = useState(false);
    const [dropdownValue1, setDropdownValue1] = useState('Shop by');
    const [dropdownValue2, setDropdownValue2] = useState('Sort by');


    return (
        <div className='container-sidebar'>
            <CustomInput
                icon={<img src={IC_search} />}
                placeholder={'Search...'}
            />
            <div className='container-sidebar__dropdown-group'>
                <DropDown title={dropdownValue1} onItemClick={({ value }) => setDropdownValue1(value)} />
                <DropDown title={dropdownValue2} onItemClick={({ value }) => setDropdownValue2(value)} />
            </div>
            <div className='container-sidebar__switch-item'>
                <p className='text-font-family_default text-heading5 text-color-black'>On sale</p>
                <Switch
                    rounded={true}
                    isToggle={onsale}
                    onToggle={() => setOnsale(!onsale)}
                />
            </div>
            <div className='container-sidebar__switch-item'>
                <p className='text-font-family_default text-heading5 text-color-black'>In stock</p>
                <Switch
                    rounded={true}
                    isToggle={instock}
                    onToggle={() => setInstock(!instock)}
                />
            </div>
        </div>
    )
}

export default Sidebar