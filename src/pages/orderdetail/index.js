import React from 'react'
import "./style.css"

const OrderDetail = () => {
    return (
        <>
            <div id='container-OrderDetail'>
                <div className='container-OrderDetail__order-info'>
                    <p className='text-font-family_default text-heading2 text-color-black'>Order Details</p>
                    <div className='container-OrderDetail__order-info_wraper'>
                        <div className='container-OrderDetail__order-info--content1'>
                            <div className='container-OrderDetail__order-info__content1--number'>
                                <p className='text-font-family_default text-heading5 text-color-black'>ORDER NUMBER</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>ORDER NUMBER</p>
                            </div>
                            <div className='container-OrderDetail__order-info__content1--email'>
                                <p className='text-font-family_default text-heading5 text-color-black'>EMAIL</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Vitathemes@gmail.com</p>
                            </div>
                            <div className='container-OrderDetail__order-info__content1--email'>
                                <p className='text-font-family_default text-heading5 text-color-black'>PAYMENT METHOD</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Mastercard*************7865</p>
                            </div>
                            <div className='container-OrderDetail__order-info__content1--email'>
                                <p className='text-font-family_default text-heading5 text-color-black'>ORDER DATE</p>
                                <p className='text-font-family_default text-heading5 text-color-accent'>October 8,2020</p>
                            </div>
                        </div>
                        <div className='container-OrderDetail__order-info--content2'>
                            <div className='container-OrderDetail__order-info__content1--number'>
                                <p className='text-font-family_default text-heading5 text-color-black'>DELIVERY OPTIONS</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Standard delivery</p>
                            </div>
                            <div className='container-OrderDetail__order-info__content1--email'>
                                <p className='text-font-family_default text-heading5 text-color-black'>DELIVERY ADDRESS</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Kristian holst 34</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Kristian holst 34</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Kristian holst 34</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Kristian holst 34</p>
                            </div>
                            <div className='container-OrderDetail__order-info__content1--email'>
                                <p className='text-font-family_default text-heading5 text-color-black'>CONTACT NUMBER</p>
                                <p className='text-font-family_default text-heading5 text-color-dark-gray'>+44 8749790988</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-OrderDetail__order-summary'>
                    <p className='text-font-family_default text-heading2 text-color-black'>ORDER Summary</p>
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
                    </div>
                </div>
            </div>
            <div className='padding'></div>
        </>
    )
}

export default OrderDetail