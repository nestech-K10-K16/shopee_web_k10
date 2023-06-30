import React from 'react'
import { IMG_cardshop1 } from '../../assets'
import AppButton from '../Appbutton'
import './style.css'

const CardShop = () => {
    return (
        <AppButton id='container-cardshop'>
            <div className='container-cardshop__image'>
                <img src={IMG_cardshop1} />
                <div>
                    <p className='text-font-family_default text-body-large text-color_Black'>ADD TO CART</p>
                </div>
            </div>
            <div className='container-cardshop__label-group'>
                <p className='text-font-family_default text-heading3'>Lira Earrings</p>
                <p className='text-font-family_default text-heading4 text-color_Accent'>$ 20,00</p>
            </div>
        </AppButton>
    )
}

export default CardShop