import React, { useState } from 'react';
import CustomInput from '../CustomInput';
import DropDown from '../dropdown';
import Switch from '../switch';
import "./style.css"

const Sidebar = () => {

    const [onsale, setOnsale] = useState(false)
    const [instock, setInstock] = useState(false)

    return (
        <div className='container-sidebar'>
            <CustomInput
                icon={<i class="fa-sharp fa-solid fa-magnifying-glass"></i>}
                placeholder={'Search...'}
            />
            <div className='container-sidebar__dropdown-group'>
                <DropDown title={'Shop By'} />
                <DropDown title={'Sort By'} />
            </div>
            <div className='container-sidebar__switch-item'>
                <p className='text-font-family_default text-heading5 text-color_black'>On sale</p>
                <Switch
                    rounded={true}
                    isToggle={onsale}
                    onToggle={() => setOnsale(!onsale)}
                />
            </div>
            <div className='container-sidebar__switch-item'>
                <p className='text-font-family_default text-heading5 text-color_black'>In stock</p>
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