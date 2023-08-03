import React from 'react'
import { TabPanel, useTabs } from "react-headless-tabs";
import { TABVIEW_my_acount, tabsmy_account } from '../../constants/common';
import TabselectorMyAccount from './tabselectormyaccount';
import "./style.css"

const TabViewmy_account = () => {

    const [selectedTab, setSelectedTab] = useTabs(tabsmy_account);

    return (
        <>
            <div id="container-tabviewmyaccount">
                {
                    TABVIEW_my_acount.map((e) => {
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
                    TABVIEW_my_acount.map((e) => {
                        return <TabPanel hidden={selectedTab !== e.idTab}>{<e.PanelComponent />}</TabPanel>
                    })
                }
            </div>
        </>
    )
}

export default TabViewmy_account