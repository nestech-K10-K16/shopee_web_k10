import React from 'react'
import { IC_close, IMG_cardshop1 } from '../../assets'
import QuantityInput from '../quantityInput'
import "./style.css"
import AppButton from '../Appbutton'

const CardShoppingCart = () => {
    return (
        <div id='container-CardShoppingCart'>
            <div className='container-CardShoppingCart--item-image'>
                <img src={IMG_cardshop1} />
            </div>
            <div className='container-CardShoppingCart__info-group'>
                <p className='text-font-family_default text-heading3 text-color-black'>Lira Earrings</p>
                <p className='text-font-family_default text-heading5 text-color-dark-gray'>Black / Medium</p>
                <p className='text-font-family_default text-heading5 text-color-accent'>$ 20,00</p>
            </div>
            <QuantityInput
                width={'6.375rem'}
                height={'3.3125rem'}
            />
            <AppButton>
                <img src={IC_close} />
            </AppButton>
        </div>
    )
}

export default CardShoppingCart