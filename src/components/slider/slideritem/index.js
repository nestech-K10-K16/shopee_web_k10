import React from 'react'
import AppButton from '../../Appbutton'
import "./style.css"

const SliderItem = () => {
    return (
        <div className='container-slider'>
            <div className='container-slider__content'>
                <div className='container-slider__content__tilte-group'>
                    <p className='text-font-family_default text-heading1 text-color-white'>Gold big hoops</p>
                    <p className='text-font-family_default text-heading2 text-color-white'>68,000</p>
                </div>
                <AppButton className='text-font-family_default text-color-white container-slider__content__button'>View Product</AppButton>
            </div>
        </div>
    )
}

export default SliderItem