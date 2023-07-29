import React from 'react'
import { Link } from 'react-router-dom'
import { PATHNAME_LIST } from '../../router/router'
import CustomInput from '../../components/CustomInput'
import AppButton from '../../components/Appbutton'
import "./style.css"
import CheckBox from '../../components/checkbox'
import PaymentMethod from '../../components/PaymentMethod'

const Checkout = () => {
    return (
        <div id='container-checkout'>
            <p className='text-font-family_default text-heading1 text-color-black'>Checkout</p>
            <div className='container-checkout__apply-coupon'>
                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Returning customer?<Link to={PATHNAME_LIST.my_account} className='text-color-black'> Click here to login</Link></p>
                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Have a coupon? <Link to={PATHNAME_LIST.my_account} className='text-color-black'> Click here to enter your code</Link></p>
                <div className='container-checkout__apply-coupon_code-field'>
                    <p className='text-font-family_default text-heading5 text-color-dark-gray'>If you have a coupon code, please apply it below.</p>
                    <div>
                        <CustomInput
                            placeholder={'Enter your Email*'}
                            width={'21rem'}
                            height={'2.56rem'}
                        />
                        <AppButton width={'10.5rem'} height={'3.31rem'} className='web-button'>
                            <p className='text-font-family_default text-body-large'>APPLY COUPON</p>
                        </AppButton>
                    </div>
                </div>
            </div>
            <div className='container-checkout__billingaddress-yourorder'>
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
                    <div className='container-checkout__billingaddress-yourorder__check-box-group'>
                        <CheckBox label={'Create an acoount?'} />
                        <CheckBox label={'Ship to a different address?'} />
                    </div>
                    <CustomInput
                        placeholder={'Order notes'}
                        width={'16.875rem'}
                        height={'2.5rem'}
                    />
                </div>
                <div className='container-OrderDetail__order-summary'>
                    <p className='text-font-family_default text-heading2 text-color-black'>YOUR ORDER</p>
                    <div className='container-OrderDetail__order-summary__bills'>
                        <div className='container-OrderDetail__order-summary__bills__title-group'>
                            <p className='text-font-family_default text-heading5 text-color-black'>PRODUCT</p>
                            <p className='text-font-family_default text-heading5 text-color-black'>TOTAL</p>
                        </div>
                        <div className='container-OrderDetail__order-summary__bills__item'>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>Lira Earrings </p>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>$64</p>
                        </div>
                        <div className='container-OrderDetail__order-summary__bills__item'>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>Lira Earrings </p>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>$64</p>
                        </div>
                        <div className='container-OrderDetail__order-summary__bills__item'>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>Lira Earrings </p>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>$64</p>
                        </div>
                        <div className='container-OrderDetail__order-summary__bills__subtotal'>
                            <p className='text-font-family_default text-heading5 text-color-black'>SUBTOTAL</p>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>$85</p>
                        </div>
                        <div className='container-OrderDetail__order-summary__bills__shipping'>
                            <p className='text-font-family_default text-heading5 text-color-black'>SHIPPING</p>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>Free shipping</p>
                        </div>
                        <div className='container-OrderDetail__order-summary__bills__total'>
                            <p className='text-font-family_default text-body-large text-color-black'>TOTAL</p>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>$85</p>
                        </div>
                        <PaymentMethod />
                        <AppButton width={'28.875rem'} height={'3.3125rem'} className='web-button'>
                            <p className='text-font-family_default text-body-large'>PLACE ORDER</p>
                        </AppButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout