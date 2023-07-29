import React from 'react'
import CardShoppingCart from '../../components/CardShoppingCart'
import AppButton from '../../components/Appbutton'
import CustomInput from '../../components/CustomInput'
import DropDown from '../../components/dropdown'
import { DROP_DONW_TYPE } from '../../constants/common'
import { Link } from 'react-router-dom'
import { PATHNAME_LIST } from '../../router/router'
import "./style.css"

const Cart = () => {
    return (
        <div id='container-cart'>
            <p className='text-font-family_default text-heading1 text-color-black'>Shopping Cart</p>
            <div className='container-cart__content'>
                <div className='container-cart__list-shopping-cart'>
                    <CardShoppingCart />
                    <CardShoppingCart />
                    <CardShoppingCart />
                    <div className='container-cart__list-shopping-cart--couponcode'>
                        <AppButton width={'10.5rem'} height={'3.31rem'} className='web-button-hover-style'>
                            <p className='text-font-family_default text-body-large'>UPDATE CART</p>
                        </AppButton>
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
                <div className='container-cart__total-cart-content'>
                    <p className='text-font-family_default text-heading2 text-color-black'>Cart totals</p>
                    <div className='container-cart__total-cart-content__label-item'>
                        <p className='text-font-family_default text-heading5 text-color-black'>SUBTOTAL</p>
                        <div className='container-cart__total-cart-content__subtotal__list-item'>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>$ 65,00</p>
                        </div>
                    </div>
                    <div className='container-cart__total-cart-content__label-item'>
                        <p className='text-font-family_default text-heading5 text-color-black'>SHIPPING</p>
                        <div className='container-cart__total-cart-content__label-item--content'>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>Shipping costs will be calculated once you have provided address.</p>
                            <DropDown
                                type={DROP_DONW_TYPE.CALCULATE_SHIPPING}
                                title={'CALCULATE SHIPPING'}
                                width={'15.6rem'}
                            />
                            <AppButton width={'15.6rem'} height={'3.31rem'} className='web-button-hover-style'>
                                <p className='text-font-family_default text-body-large'>UPDATE CART</p>
                            </AppButton>
                        </div>

                    </div>
                    <div className='container-cart__total-cart-content__label-item'>
                        <span className='text-font-family_default text-body-large text-color-black'>TOTAl</span>
                        <span className='text-font-family_default text-body-large text-color-black'>$ 87,00</span>
                    </div>
                    <Link to={PATHNAME_LIST.CHECK_OUT} className='web-button text-font-family_default text-body-large'>
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Cart