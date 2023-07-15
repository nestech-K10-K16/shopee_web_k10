import DescriptionPanel from "../components/DescriptionPanel"
import AditionalPanel from "../components/AditionalPanel"
import ReviewPanel from "../components/ReviewPanel"

export const BUTTON_TYPE = {
    ICON: 1,
    DEFAULT: 2,
    LINK: 3
}

export const INPUT_SIZE = {
    LONG: '392px',
}

export const tabsShopDetail = ['Description', 'Aditional', 'Reviews']
export const TABVIEW_SHOP_DETAIL = [
    {
        idTab: 'Description',
        titleTabSelector: 'Description',
        PanelComponent: DescriptionPanel,
    },
    {
        idTab: 'Aditional',
        titleTabSelector: 'Aditional information',
        PanelComponent: AditionalPanel,
    },
    {
        idTab: 'Reviews',
        titleTabSelector: 'Reviews',
        PanelComponent: ReviewPanel,
    }
]