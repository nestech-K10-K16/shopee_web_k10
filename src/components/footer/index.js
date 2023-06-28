import React from 'react'
import { Link } from "react-router-dom";
import { IC_facebook, IC_in, IC_instagram, IC_twitter } from '../../assets';
import './style.css'

const Footer = () => {
    return (
        <div id='container-footer'>
            <div className='container-footer_content-group1'>
                <div>
                    <Link to={'/contact'} className="text-default text-font-family_default text-color_Black">CONTACT</Link>
                    <Link to={'/terms'} className="text-default text-font-family_default text-color_Black">TERMS OF SERVICES</Link>
                    <Link to={'/shipping'} className="text-default text-font-family_default text-color_Black">SHIPPING AND RETURNS</Link>
                </div>
                <input placeholder='Give an email, get the newsletter.' />
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