import React from 'react'
import { IC_facebook, IC_instagram, IC_twitter, IMG_main_item, IMG_sub_item } from '../../assets'
import CustomInput from '../../components/CustomInput'
import CheckBox from '../../components/checkbox'
import { INPUT_TYPE } from '../../constants/common'
import AppButton from '../../components/Appbutton'
import CardComment from '../../components/CardComment'
import "./style.css"

const PostDetail = () => {
    return (
        <>
            <div id='container-PostDetail'>
                <div className='container-PostDetail__title-group'>
                    <p className='text-font-family_default text-heading1 text-color-black'>Fast Fashion, And Faster Fashion</p>
                    <p className='text-font-family_default text-heading5 text-color-dark-gray'>by <span className='text-color-black'>ANNY JOHNSON</span> - October 8,2020</p>
                </div>
                <img src={IMG_main_item} alt='' />
                <div className='container-PostDetail__paragraph text-font-family_default text-heading5 text-color-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
                </div>
                <div className='container-PostDetail__sub-img'>
                    <img src={IMG_sub_item} alt='' />
                </div>
                <div className='container-PostDetail__top-trens'>
                    <p className='text-font-family_default text-heading2 text-color-black'>Top trends</p>
                    <p className='text-font-family_default text-heading5 text-color-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
                    </p>
                    <ul className='container-PostDetail__top-trens__list-trens'>
                        <li className='text-font-family_default text-heading5 text-color-black'>consectetur adipiscing elit. Aliquam placerat</li>
                        <li className='text-font-family_default text-heading5 text-color-black'>Lorem ipsum dolor sit amet consectetur </li>
                        <li className='text-font-family_default text-heading5 text-color-black'>sapien tortor faucibus augue</li>
                        <li className='text-font-family_default text-heading5 text-color-black'>a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>
                    </ul>
                </div>
                <div className='container-PostDetail__tags-group'>
                    <p className='text-font-family_default text-heading5 text-color-black'>Tags: <span className='text-color-dark-gray'>Fashion, Style, Season</span></p>
                    <div className='text-font-family_default text-heading5 text-color-black'>
                        Share: <span><img src={IC_facebook} /></span> <span><img src={IC_instagram} /></span> <span><img src={IC_twitter} /></span>
                    </div>
                </div>
            </div>
            <div id='container-PostDetail-input-form'>
                <div className='container-PostDetail-input-form__title-group'>
                    <p className='text-font-family_default text-heading2 text-color-black'>Leave a reply</p>
                    <p className='text-font-family_default text-body-medium text-color-dark-gray'>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className='container-PostDetail-input-form__input-field-group'>
                    <CustomInput
                        placeholder={'Enter your name*'}
                        height={'2.19rem'}
                    />
                    <CustomInput
                        placeholder={'Enter your Email*'}
                        height={'2.19rem'}
                    />
                    <CustomInput
                        placeholder={'Enter your Website'}
                        height={'2.19rem'}
                    />
                    <CheckBox
                        label={'Save my name, email, and website in this browser for the next time I comment'}
                        classNameLabel={'text-font-family_default text-body-medium text-color-dark-gray'}
                    />
                    <CustomInput
                        type={INPUT_TYPE.HAVE_LABEL}
                        label={'Your Comment*'}
                        height={'3.81rem'}
                    />
                    <AppButton className='text-font-family_default text-body-large text-color-white'>
                        POST COMMENT
                    </AppButton>
                </div>
            </div>
            <div id='container-comment-group'>
                <p className='text-font-family_default text-heading2 text-color-black'>Comments</p>
                <CardComment isReply={true} />
                <CardComment />
                <CardComment isReply={true} />
                <CardComment />
            </div>
        </>

    )
}

export default PostDetail