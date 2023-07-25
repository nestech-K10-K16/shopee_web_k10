import React from 'react'
import CustomInput from '../../CustomInput'
import AppButton from '../../Appbutton'
import CheckBox from '../../checkbox'
import "./style.css"

const SignInPanel = () => {
    return (
        <div id='container-SignInPanel'>
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
            <CheckBox label={'Remember me'} />
            <AppButton className='text-font-family_default text-body-large text-color-white'>
                {'Sign In'}
            </AppButton>
        </div>
    )
}

export default SignInPanel