import React, { memo, useState } from 'react'
import ReviewBox from './Reviewbox'
import CustomInput from '../CustomInput'
import ReactStars from 'react-rating-star-with-type'
import { COLORS, INPUT_TYPE } from '../../constants/common'
import './style.css'
import AppButton from '../Appbutton'

const ReviewPanel = () => {

    const [star, setStar] = useState(5);

    console.log('ReviewPanel')

    return (
        <div id='container-review'>
            <div className='container-review__list-review'>
                <p className='text-font-family_default text-heading3 text-color_black'>Reviews for lira earings</p>
                <ReviewBox />
                <ReviewBox />
                <ReviewBox />
            </div>
            <div className='container-review__review-form'>
                <p className='text-font-family_default text-heading3 text-color_black'>Add a Review</p>
                <p className='text-font-family_default text-body-medium text-color-dark-gray'>Your email address will not be published. Required fields are marked *</p>
                <CustomInput
                    type={INPUT_TYPE.HAVE_LABEL}
                    label={'Your Review *'}
                    height={'4rem'}
                />
                <CustomInput
                    type={INPUT_TYPE.DEFAULT}
                    placeholder={'Enter your name*'}
                />
                <CustomInput
                    type={INPUT_TYPE.DEFAULT}
                    placeholder={'Enter your mail*'}
                />
                <div className='container-review__ratting-selector'>
                    <label className='text-font-family_default text-body-medium text-color-dark-gray'>Your Rating*</label>
                    <ReactStars
                        onChange={(nextValue) => setStar(nextValue)}
                        isEdit={true}
                        activeColor={COLORS.BLACK}
                        size={'1.125rem'}
                    />
                </div>
                <AppButton
                    className='
                    text-font-family_default 
                    text-body-large
                    text-color-white
                    container-review__sumbit-button'
                >
                    Submit
                </AppButton>
            </div>
        </div>
    )
}

export default memo(ReviewPanel)