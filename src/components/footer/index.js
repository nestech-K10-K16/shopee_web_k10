import React from 'react'
import { Link } from "react-router-dom";
import './style.css'
import CustomInput from '../CustomInput';

const Footer = () => {
    return (
        <div id='container-footer'>
            <div className='container-footer_content-group1'>
                <div>
                    <Link to={'/contact'} className="text-default text-font-family_default text-color_black">CONTACT</Link>
                    <Link to={'/terms'} className="text-default text-font-family_default text-color_black">TERMS OF SERVICES</Link>
                    <Link to={'/shipping'} className="text-default text-font-family_default text-color_black">SHIPPING AND RETURNS</Link>
                </div>
                <CustomInput placeholder={'Give an email, get the newsletter.'} />
            </div>
            <div className='container-footer_content-group2'>
                <p>© 2021 Shelly. Terms of use and privacy policy.</p>
                <div>
                    <a><i class="fa-brands fa-linkedin-in"></i></a>
                    <a><i class="fa-brands fa-facebook-f"></i></a>
                    <a><i class="fa-brands fa-instagram"></i></a>
                    <a><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer