import React from 'react'
import CustomInput from '../CustomInput';
import { Link } from "react-router-dom";
import { INPUT_SIZE } from '../../constants/common';
import { IC_arrow_right, IC_facebook, IC_in, IC_instagram, IC_twitter } from '../../assets';
import './style.css'

const Footer = () => {
    return (
        <div id='container-footer'>
            <div className='container-footer_content-group1'>
                <div>
                    <Link to={'/contact'} className="text-default text-font-family_default text-color_black">CONTACT</Link>
                    <Link to={'/terms'} className="text-default text-font-family_default text-color_black">TERMS OF SERVICES</Link>
                    <Link to={'/shipping'} className="text-default text-font-family_default text-color_black">SHIPPING AND RETURNS</Link>
                </div>
                <CustomInput width={INPUT_SIZE.LONG} icon={<img src={IC_arrow_right} />} placeholder={'Give an email, get the newsletter.'} />

            </div>
            <div className='container-footer_content-group2'>
                <p>© 2021 Shelly. Terms of use and privacy policy.</p>
                <div>
                    <a><img src={IC_in} /></a>
                    <a><img src={IC_facebook} /></a>
                    <a><img src={IC_instagram} /></a>
                    <a><img src={IC_twitter} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer