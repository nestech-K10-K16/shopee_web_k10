import React from 'react'
import AppButton from '../Appbutton'
import { IMG_cardshop1 } from '../../assets'
import { PATHNAME_LIST } from '../../router/router'
import { Link } from 'react-router-dom'
import './style.css'

const CardShop = ({ title, onAddItem }) => {
    return (
        <Link>
            <div to={PATHNAME_LIST.SHOP_DETAIL} id='container-cardshop'>
                <div className='container-cardshop__image'>
                    <img src={IMG_cardshop1} />
                    <AppButton onClick={onAddItem} className='text-font-family_default text-body-large text-color-black'>
                        ADD TO CART
                    </AppButton>
                </div>
                <div className='container-cardshop__label-group'>
                    <p className='text-font-family_default text-heading3 text-color-black'>{title || 'error'}</p>
                    <p className='text-font-family_default text-heading4 text-color-accent'>$ 20,00</p>
                </div>
            </div>
        </Link>
    )
}

export default CardShop