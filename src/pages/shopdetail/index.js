import React from 'react'
import { IMG_cardshop1, test2 } from '../../assets'
import AppButton from '../../components/Appbutton'
import { BUTTON_TYPE } from '../../constants/common'
import ListCard from '../../components/listcards'
import CardShop from '../../components/cardshop'
import './style.css'

const ShopDetail = () => {

    const renderCardShop = () => {
        return (
            <>
                <CardShop />
                <CardShop />
                <CardShop />
            </>
        )
    }

    return (
        <>
            <div id='container-shopdetail'>
                <div className='container-shopdetail__group-img'>
                    <AppButton type={BUTTON_TYPE.ICON} path={IMG_cardshop1} />
                    <AppButton type={BUTTON_TYPE.ICON} path={IMG_cardshop1} />
                    <AppButton type={BUTTON_TYPE.ICON} path={IMG_cardshop1} />
                    <AppButton type={BUTTON_TYPE.ICON} path={IMG_cardshop1} />
                </div>
                <div className='container-shopdetail__main-img'>
                    <img src={IMG_cardshop1} />
                </div>
                <div className='container-shopdetail__content'>
                    <div className='container-shopdetail__content__title-group'>
                        <p className='text-font-family_default text-heading2 text-color_black'>Lira Earrings</p>
                        <p className='text-font-family_default text-heading4 text-color_accent'>$ 20,00</p>
                    </div>
                    <div className='container-shopdetail__content__label-group'></div>
                    <div className='container-shopdetail__content__description'>
                        <p className='text-font-family_default text-heading5 text-color-dark-gray'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                        </p>
                    </div>
                    <div className='container-shopdetail__content__button-group'>
                        <img src={test2} />
                        <AppButton className=''>ADD TO CART</AppButton>
                    </div>
                    <div className='container-shopdetail__content__social-icon-group'>

                    </div>
                    <div className='container-shopdetail__content__categories_group'>
                        <p className='text-font-family_default text-heading5 text-color_black'>SKU: <p className='text-font-family_default text-heading5 text-color-dark-gray'> 12</p></p>
                        <p className='text-font-family_default text-heading5 text-color_black'>Categories: <p className='text-font-family_default text-heading5 text-color-dark-gray'> Fashion, Style</p></p>
                    </div>
                </div>
            </div>
            <ListCard
                title={'Similar Items'}
                showTitle={true}
                renderItem={renderCardShop()}
            />
        </>
    )
}

export default ShopDetail