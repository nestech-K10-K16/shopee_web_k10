import React from 'react'
import TabViewMyAccount from '../../components/tabviewmyaccount'
import { Link } from 'react-router-dom'
import "./style.css"

const myaccount = () => {
    return (
        <div id='container-myaccount'>
            <p className='text-font-family_default text-heading1 text-color-black'>My account</p>
            <TabViewMyAccount />
            <Link className='text-font-family_default text-heading5 text-color-black'>Have you forgotten your password?</Link>
        </div>
    )
}

export default myaccount