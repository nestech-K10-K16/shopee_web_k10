import React from 'react'
import { TabPanel, useTabs } from 'react-headless-tabs';
import { TABVIEW_SHOP_DETAIL, tabsShopDetail } from '../../constants/common';
import Tabselector from './tabselector';
import './style.css'

const TabView = ({ dataTabview = TABVIEW_SHOP_DETAIL, useTabsData = tabsShopDetail }) => {
    const [selectedTab, setSelectedTab] = useTabs(useTabsData);

    console.log('tabview')

    return (
        <>
            <div className="container-tabView">
                <div className='container-tabView__tab-selcector-group'>
                    {
                        dataTabview.map((e) => {
                            return <Tabselector
                                isActive={selectedTab === e.idTab}
                                onClick={() => setSelectedTab(e.idTab)}
                            >
                                {e.titleTabSelector}
                            </Tabselector>
                        })
                    }
                </div>
                <div className='line'></div>
            </div>
            <div className="container-tabPanel">
                {
                    dataTabview.map((e) => {
                        return <TabPanel hidden={selectedTab !== e.idTab}>{<e.PanelComponent />}</TabPanel>
                    })
                }
            </div>
        </>
    )
}

export default TabView