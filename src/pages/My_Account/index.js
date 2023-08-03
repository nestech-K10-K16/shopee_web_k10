import React from 'react'
import TabView from '../../components/tabview'
import { TABVIEW_MY_ACOUNT, tabsMyAccount } from '../../constants/common'
import "./style.css"

const MyAccount = () => {
    return (
        <div id='container-MyAccount'>
            <p className='text-font-family_default text-heading1 text-color-black'>My Account</p>
            <TabView
                dataTabview={TABVIEW_MY_ACOUNT}
                useTabsData={tabsMyAccount}
            />
        </div>
    )
}

export default MyAccount