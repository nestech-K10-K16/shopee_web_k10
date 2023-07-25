import React from 'react'
import { IMG_avtar1 } from '../../assets'
import AppButton from '../Appbutton'
import "./style.css"

const CardComment = ({ isReply = false }) => {


    return (
        <>
            <div id='wrapper-card-comment'>
                <div id='container-card-comment'>
                    <div className='container-card-comment__avatar'>
                        <img src={IMG_avtar1} />
                    </div>
                    <div className='container-card-comment__content'>
                        <div className='container-card-comment__content_account-name'>
                            <p className='text-font-family_default text-heading3 text-color-black'>Scarlet withch <span className='text-font-family_default text-body-medium text-color-dark-gray'>6 May, 2020</span></p>
                            <AppButton className='text-font-family_default text-body-medium text-color-dark-gray'>Reply</AppButton>
                        </div>
                        <p className='text-font-family_default text-heading5 text-color-dark-gray'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                        </p>
                    </div>
                </div>

                <div id='container-reply-comment'>
                    {isReply ? <div id='container-card-comment'>
                        <div className='container-card-comment__avatar'>
                            <img src={IMG_avtar1} />
                        </div>
                        <div className='container-card-comment__content'>
                            <div className='container-card-comment__content_account-name'>
                                <p className='text-font-family_default text-heading3 text-color-black'>Scarlet withch <span className='text-font-family_default text-body-medium text-color-dark-gray'>6 May, 2020</span></p>
                                <AppButton className='text-font-family_default text-body-medium text-color-dark-gray'>Reply</AppButton>
                            </div>
                            <p className='text-font-family_default text-heading5 text-color-dark-gray'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                            </p>
                        </div>
                    </div> : ''}
                </div>
            </div>
        </>
    )
}

export default CardComment