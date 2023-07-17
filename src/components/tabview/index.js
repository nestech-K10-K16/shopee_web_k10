import React from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs';
import { TABVIEW_SHOP_DETAIL, tabsShopDetail } from '../../constants/common';
import Tabselector from './tabselector';
import './style.css'

const TabView = () => {
    const [selectedTab, setSelectedTab] = useTabs(tabsShopDetail);

    console.log('tabview')

    return (
        <>
            <nav className="container-tabView">
                {
                    TABVIEW_SHOP_DETAIL.map((e) => {
                        return <Tabselector
                            isActive={selectedTab === e.idTab}
                            onClick={() => setSelectedTab(e.idTab)}
                        >
                            {e.titleTabSelector}
                        </Tabselector>
                    })
                }
            </nav>
            <div className="container-tabPanel">
                {
                    TABVIEW_SHOP_DETAIL.map((e) => {
                        return <TabPanel hidden={selectedTab !== e.idTab}>{<e.PanelComponent />}</TabPanel>
                    })
                }
            </div>
        </>
    )
}

export default TabView