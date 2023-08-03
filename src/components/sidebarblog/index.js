import React, { useState } from 'react'
import CustomInput from '../CustomInput'
import { IC_search } from '../../assets'
import { INPUT_TYPE, SIDE_BAR_HREFS } from '../../constants/common'
import "./style.css"

const SidebarBlog = () => {

    const [isActive, setIsActive] = useState(SIDE_BAR_HREFS[0].id)

    return (
        <div id='container-sidebarblog'>
            <div className='container-sidebarblog__input-field'>
                <CustomInput
                    type={INPUT_TYPE.ICON}
                    width={'16.3125rem'}
                    height={'2.1875rem'}
                    placeholder={'Search...'}
                    icon={<img style={{ width: '1.1875rem', height: '1.1875rem' }} src={IC_search} />}
                />
            </div>
            <div className='container-sidebarblog__href-group'>
                {
                    SIDE_BAR_HREFS.map(({ id, title }) => {
                        return <a
                            className={`text-font-family_default text-color-dark-gray ${isActive === id ? 'active text-heading4' : 'text-heading5'}`}
                            onClick={() => setIsActive(id)}
                        >
                            {title}
                        </a>
                    })
                }
            </div>
        </div>
    )
}

export default SidebarBlog