import React from 'react'
import CustomInput from '../CustomInput'
import AppButton from '../Appbutton'
import "./style.css"

const AccountDetailPanel = () => {
    return (
        <div id='container-AccountDetailPanel'>
            <p className='text-font-family_default text-heading1 text-color-black'>Account details</p>
            <div className='container-AccountDetailPanel__input-group-1'>
                <CustomInput
                    placeholder={'First name *'}
                    width={'31.3rem'}
                    height={'2.19rem'}
                />
                <CustomInput
                    placeholder={'First name *'}
                    width={'31.3rem'}
                    height={'2.19rem'}
                />
                <div>
                    <CustomInput
                        placeholder={'First name *'}
                        width={'31.3rem'}
                        height={'2.19rem'}
                    />
                    <p className='text-font-family_default text-body-medium text-color-dark-gray'>This will be how your name will be displayed in the account section and in reviews.</p>
                </div>
                <CustomInput
                    placeholder={'First name *'}
                    width={'31.3rem'}
                    height={'2.19rem'}
                />
            </div>
            <div className='container-AccountDetailPanel__input-group-2'>
                <p className='text-font-family_default text-body-large text-color-black'>Password change</p>
                <CustomInput
                    placeholder={'First name *'}
                    width={'31.3rem'}
                    height={'2.19rem'}
                />
                <CustomInput
                    placeholder={'First name *'}
                    width={'31.3rem'}
                    height={'2.19rem'}
                />
                <CustomInput
                    placeholder={'First name *'}
                    width={'31.3rem'}
                    height={'2.19rem'}
                />
            </div>
            <AppButton className='text-font-family_default text-body-large text-color-white'>
                SAVE CHANGES
            </AppButton>
        </div>
    )
}

export default AccountDetailPanel