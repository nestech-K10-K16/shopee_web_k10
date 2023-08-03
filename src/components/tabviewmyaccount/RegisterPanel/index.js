import React from 'react'
import CustomInput from '../../CustomInput'
import AppButton from '../../Appbutton'
import "./style.css"

const RegisterPanel = () => {
    return (
        <div id='container-RegisterPanel'>
            <CustomInput
                placeholder={'Email'}
                width={'31.25rem'}
                height={'2.5rem'}
            />
            <CustomInput
                placeholder={'Password'}
                width={'31.25rem'}
                height={'2.5rem'}
            />
            <CustomInput
                placeholder={'Re-Password'}
                width={'31.25rem'}
                height={'2.5rem'}
            />
            <AppButton className='text-font-family_default text-body-large text-color-white'>
                {'Register'}
            </AppButton>
        </div>
    )
}

export default RegisterPanel