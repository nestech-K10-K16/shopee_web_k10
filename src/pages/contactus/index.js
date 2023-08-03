import React from 'react'
import CustomInput from '../../components/CustomInput'
import AppButton from '../../components/Appbutton'
import { INPUT_TYPE } from '../../constants/common'
import "./style.css"

const ContactUs = () => {
    return (
        <div id='container-ContactUs'>
            <div className='container-ContactUs__title-group'>
                <p className='text-font-family_default text-heading1 text-color-black'>Contact Us</p>
                <p className='text-font-family_default text-heading3 text-color-black'>Say Hello send us your thoughts about our products or share
                    your ideas with our Team!</p>
            </div>
            <div className='container-ContactUs__input-group'>
                <div className='container-ContactUs__input-group__name-field'>
                    <CustomInput
                        placeholder={'First name'}
                        width={'24.75rem'}
                    />
                    <CustomInput
                        placeholder={'Last name'}
                        width={'24.75rem'}
                    />
                </div>
                <div className='container-ContactUs__input-group__email-field'>
                    <CustomInput
                        placeholder={'Email'}
                        width={'24.75rem'}
                    />
                    <CustomInput
                        placeholder={'Subject'}
                        width={'24.75rem'}
                    />
                </div>
                <CustomInput
                    type={INPUT_TYPE.HAVE_LABEL}
                    label={'Message'}
                />
            </div>
            <AppButton className='container-ContactUs__send-btn text-font-family_default text-body-large text-color-white'>
                {'SEND'}
            </AppButton>
        </div>
    )
}

export default ContactUs