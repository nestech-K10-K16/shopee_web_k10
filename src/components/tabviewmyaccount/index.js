import React from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TABVIEW_MY_ACCOUNT, tabsMyAccount } from '../../constants/common';
import TabselectorMyAccount from './tabselectormyaccount';
import "./style.css"

const TabViewMyAccount = () => {

    const [selectedTab, setSelectedTab] = useTabs(tabsMyAccount);

    return (
        <>
            <div id="container-tabviewmyaccount">
                {
                    TABVIEW_MY_ACCOUNT.map((e) => {
                        return <TabselectorMyAccount
                            isActive={selectedTab === e.idTab}
                            onClick={() => setSelectedTab(e.idTab)}
                        >
                            {e.titleTabSelector}
                        </TabselectorMyAccount>
                    })
                }
            </div>
            <div id="container-tabview-myaccount-panel">
                {
                    TABVIEW_MY_ACCOUNT.map((e) => {
                        return <TabPanel hidden={selectedTab !== e.idTab}>{<e.PanelComponent />}</TabPanel>
                    })
                }
            </div>
        </>
    )
}

export default TabViewMyAccount