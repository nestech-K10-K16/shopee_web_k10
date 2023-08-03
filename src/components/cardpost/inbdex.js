import React from 'react'
import { IMG_post1 } from '../../assets'
import { Link } from 'react-router-dom'
import "./style.css"
import { PATHNAME_LIST } from '../../router/router'



const CardPost = ({ title }) => {
    return (
        <div id='container-cardPost'>
            <img src={IMG_post1} />
            <p className='text-font-family_default text-body-medium text-color-dark-gray'>Fashion - October 8, 2020</p>
            <p className='text-font-family_default text-heading3 text-color-black'>{title || ''}</p>
            <p className='text-font-family_default text-heading5 text-color-dark-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </p>
            <Link to={PATHNAME_LIST.POST_DETAIL} className='text-font-family_default text-body-large text-color-accent'>
                Read More
            </Link>
        </div>
    )
}

export default CardPost