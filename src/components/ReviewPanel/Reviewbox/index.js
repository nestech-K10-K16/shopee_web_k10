import React from 'react'
import ReactStars from 'react-rating-star-with-type'
import { COLORS } from '../../../constants/common'
import './style.css'

const ReviewBox = () => {
    return (
        <div id='container-review-box'>
            <div className='container-review-box__title-group'>
                <p className='text-font-family_default text-heading3 text-color-black'>Scarlet withch</p>
                <p className='text-font-family_default text-body-medium text-color-dark-gray'>6 May, 2020</p>
            </div>
            <div className='container-review-box__ratting'>
                <ReactStars
                    value={4.2}
                    edit={false}
                    activeColors={COLORS.BLACK}
                />
            </div>
            <p className='text-font-family_default text-heading5 text-color-dark-gray'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. </p>
        </div>
    )
}

export default ReviewBox