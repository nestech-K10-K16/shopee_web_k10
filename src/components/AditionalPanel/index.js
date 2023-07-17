import React, { memo } from 'react'
import './style.css'

const Aditional = () => {
    console.log('Aditional')
    return (
        <div id='container-aditional'>
            <p className='text-font-family_default text-heading5 text-color_black'>Weigh: <p className='text-font-family_default text-heading5 text-color-dark-gray'> 0.3 kg</p></p>
            <p className='text-font-family_default text-heading5 text-color_black'>Dimention: <p className='text-font-family_default text-heading5 text-color-dark-gray'> 15 x 10 x 1cm</p></p>
            <p className='text-font-family_default text-heading5 text-color_black'>Colours: <p className='text-font-family_default text-heading5 text-color-dark-gray'> Black,Browns,White</p></p>
            <p className='text-font-family_default text-heading5 text-color_black'>Material: <p className='text-font-family_default text-heading5 text-color-dark-gray'> Metal</p></p>
        </div>
    )
}

export default memo(Aditional)