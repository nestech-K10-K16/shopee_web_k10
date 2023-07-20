import React, { useRef, useState } from 'react'
import { IC_heart, IC_star, IMG_cardshop1, test2 } from '../../assets'
import AppButton from '../../components/Appbutton'
import { BUTTON_TYPE } from '../../constants/common'
import ListCard from '../../components/listcards'
import CardShop from '../../components/cardshop'
import TabView from '../../components/tabview'
import QuantityInput from '../../components/quantityInput'
import './style.css'

const ShopDetail = () => {

    const [tt, settt] = useState(false)
    const countItem = useRef(0)

    console.log('shopdetail')

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
                        <p className='text-font-family_default text-heading2 text-color-black'>Lira Earrings</p>
                        <p className='text-font-family_default text-heading4 text-color-accent'>$ 20,00</p>
                    </div>
                    <div className='container-shopdetail__content__evaluate-group'>
                        <div className='container-shopdetail__content__evaluate-group__rate-box'>
                            <img src={IC_star} />
                            <img src={IC_star} />
                            <img src={IC_star} />
                            <img src={IC_star} />
                            <img src={IC_star} />
                        </div>
                        <p className='text-font-family_default text-heading5 text-color-dark-gray'>1 customer review</p>
                    </div>
                    <div className='container-shopdetail__content__description'>
                        <p className='text-font-family_default text-heading5 text-color-dark-gray'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                        </p>
                    </div>
                    <div className='container-shopdetail__content__button-group'>
                        <QuantityInput getCount={(e) => countItem.current = e} />
                        <AppButton onClick={() => console.log(countItem.current)}>ADD TO CART</AppButton>
                    </div>
                    <div className='container-shopdetail__content__social-icon-group'>
                        <div>
                            <AppButton type={BUTTON_TYPE.ICON} path={IC_heart} onClick={(event) => event.currentTarget.classList.toggle('filter-red')}></AppButton>
                        </div>
                    </div>
                    <div className='container-shopdetail__content__categories_group'>
                        <p className='text-font-family_default text-heading5 text-color-black'>SKU: <p className='text-font-family_default text-heading5 text-color-dark-gray'> 12</p></p>
                        <p className='text-font-family_default text-heading5 text-color-black'>Categories: <p className='text-font-family_default text-heading5 text-color-dark-gray'> Fashion, Style</p></p>
                    </div>
                </div>
            </div>
            <div>
                <TabView />
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