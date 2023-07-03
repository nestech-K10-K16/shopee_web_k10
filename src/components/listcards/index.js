import React from 'react'
import AppButton from '../Appbutton'
import CardShop from '../cardshop'
import './style.css'

const ListCard = () => {
    return (
        <div id='container-listcards'>
            <div className='container-listcards__title-group'>
                <p className='text-font-family_default text-heading1'>Shop The Latest</p>
                <AppButton className='
                text-font-family_default 
                text-heading4 
                text-color_accent'>
                    View All
                </AppButton>
            </div>
            <div className='container-listcards__list-items'>
                <CardShop />
                <CardShop />
                <CardShop />
                <CardShop />
                <CardShop />
                <CardShop />
            </div>
        </div>
    )
}

export default ListCard