import React from 'react'
import CustomInput from "../CustomInput"
import AppButton from '../Appbutton'
import "./style.css"

const AddressesPanel = () => {
    return (
        <div id='container-AddressesPanel'>
            <div className='container-AccountDetailPanel__input-group'>
                <p className='text-font-family_default text-heading3 text-color-black'>Billing Address</p>
                <div className='container-AddressesPanel__input-group__name-field'>
                    <CustomInput
                        placeholder={'First name *'}
                        width={'16.875rem'}
                        height={'2.5rem'}
                    />
                    <CustomInput
                        placeholder={'last name *'}
                        width={'16.875rem'}
                        height={'2.5rem'}
                    />
                </div>
                <CustomInput
                    placeholder={'Company Name*'}
                    width={'16.875rem'}
                    height={'2.5rem'}
                />
                <CustomInput
                    placeholder={'Country *'}
                    width={'16.875rem'}
                    height={'2.5rem'}
                />
                <CustomInput
                    placeholder={'Postcode / ZIP *'}
                    width={'16.875rem'}
                    height={'2.5rem'}
                />
                <CustomInput
                    placeholder={'Town / City *'}
                    width={'16.875rem'}
                    height={'2.5rem'}
                />
                <CustomInput
                    placeholder={'Phone *'}
                    width={'16.875rem'}
                    height={'2.5rem'}
                />
                <CustomInput
                    placeholder={'last name *'}
                    width={'16.875rem'}
                    height={'2.5rem'}
                />
                <CustomInput
                    placeholder={'Email *'}
                    width={'16.875rem'}
                    height={'2.5rem'}
                />
                <AppButton className='text-font-family_default text-body-large text-color-white'>
                    SAVE ADDRESS
                </AppButton>
            </div>
            <div className='container-AddressesPanel__shipping-address'>
                <p className='text-font-family_default text-heading3 text-color-black'>Shipping Address</p>
                <AppButton className='text-font-family_default text-body-large text-color-accent'>
                    ADD
                </AppButton>
                <p className='text-font-family_default text-body-medium  text-color-dark-gray'>You have not set up this type of address yet.</p>
            </div>
        </div>
    )
}

export default AddressesPanel