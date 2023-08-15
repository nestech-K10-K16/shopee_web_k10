import DescriptionPanel from "../components/DescriptionPanel"
import AditionalPanel from "../components/AditionalPanel"
import ReviewPanel from "../components/ReviewPanel"
import RegisterPanel from "../components/tabviewmyaccount/RegisterPanel"
import SignInPanel from "../components/tabviewmyaccount/SignInPanel"
import DashBoardPanel from "../components/DashBoardPanel"
import OrdersPanel from "../components/OrdersPanel"
import DownloadsPanel from "../components/DownloadsPanel"
import AddressesPanel from "../components/AddressesPanel"
import AccountDetailsPanel from "../components/AccountDetailsPanel"
import LogoutPanel from "../components/LogoutPanel"


export const COLORS = {
    RED: '#F50000',
    BLACK: '#000000'
}

export const BUTTON_TYPE = {
    ICON: 1,
    DEFAULT: 2,
    LINK: 3,
    WEB_STYLE: 4,
    WEB_HOVER_STYLE: 5
}

export const INPUT_TYPE = {
    DEFAULT: 1,
    ICON: 2,
    HAVE_LABEL: 3
}

export const DROP_DONW_TYPE = {
    DEFAULT: 1,
    CALCULATE_SHIPPING: 2,
}

export const CALCULATE_SHIPPING_DROP_DOWN = [
    {
        label: 'SELECT A COUNTRY'
    },
    {
        label: 'CITY'
    },
    {
        label: 'POST CODE / ZIP'
    }
]

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

export const tabsmy_account = ['SignIn', 'Register']

export const TABVIEW_my_acount = [
    {
        idTab: 'SignIn',
        titleTabSelector: 'SignIn',
        PanelComponent: SignInPanel,
    },
    {
        idTab: 'Register',
        titleTabSelector: 'Register',
        PanelComponent: RegisterPanel,
    },
]

export const tabsMyAccount = ['Dashboard', 'Orders', 'Downloads', 'Addresses', 'Account details', 'Logout']

export const TABVIEW_MY_ACOUNT = [
    {
        idTab: 'Dashboard',
        titleTabSelector: 'Dashboard',
        PanelComponent: DashBoardPanel,
    },
    {
        idTab: 'Orders',
        titleTabSelector: 'Orders',
        PanelComponent: OrdersPanel,
    },
    {
        idTab: 'Downloads',
        titleTabSelector: 'Downloads',
        PanelComponent: DownloadsPanel,
    },
    {
        idTab: 'Addresses',
        titleTabSelector: 'Addresses',
        PanelComponent: AddressesPanel,
    },
    {
        idTab: 'Account details',
        titleTabSelector: 'Account details',
        PanelComponent: AccountDetailsPanel,
    },
    {
        idTab: 'Logout',
        titleTabSelector: 'Logout',
        PanelComponent: LogoutPanel,
    },
]

export const SIDE_BAR_HREFS = [
    {
        id: 'categories',
        title: 'Categories'
    },
    {
        id: 'fashion',
        title: 'Fashion'
    },
    {
        id: 'style',
        title: 'Style'
    },
    {
        id: 'accessories',
        title: 'Accessories'
    },
    {
        id: 'season',
        title: 'Season'
    },
]

export const ITEM_PER_PAGE = 4;

export const DUMMY_DATA = [
    {
        title: 'Top Trends From Spring 1'
    },
    {
        title: 'Top Trends From Spring 2'
    },
    {
        title: 'Top Trends From Spring 3'
    },
    {
        title: 'Top Trends From Spring 4'
    },
    {
        title: 'Top Trends From Spring 5'
    },
    {
        title: 'Top Trends From Spring 6'
    },
    {
        title: 'Top Trends From Spring 7'
    },
    {
        title: 'Top Trends From Spring 8'
    },
    {
        title: 'Top Trends From Spring 9'
    },
    {
        title: 'Top Trends From Spring 10'
    },
    {
        title: 'Top Trends From Spring 11'
    },
    {
        title: 'Top Trends From Spring 12'
    },
    {
        title: 'Top Trends From Spring 13'
    },
    {
        title: 'Top Trends From Spring 14'
    },
]

export const DUMMY_DATA_PRODUCTS = [
    {
        id: '1',
        title: 'Lira Earrings 1'
    },
    {
        id: '2',
        title: 'Lira Earrings 2'
    },
    {
        id: '3',
        title: 'Lira Earrings 3'
    },
    {
        id: '4',
        title: 'Lira Earrings 4'
    },
    {
        id: '5',
        title: 'Lira Earrings 5'
    },
    {
        id: '6',
        title: 'Lira Earrings 6'
    },
    {
        id: '7',
        title: 'Lira Earrings 7'
    },
    {
        id: '8',
        title: 'Lira Earrings 8'
    },
    {
        id: '9',
        title: 'Lira Earrings 9'
    },
    {
        id: '10',
        title: 'Lira Earrings 10'
    },
]

export const handlePagination = (currentPage, itemPerPage) => {

    const lastindex = currentPage * itemPerPage;
    const fistindex = lastindex - itemPerPage;
    const pageCount = Math.ceil(DUMMY_DATA.length / itemPerPage);

    return {
        shortdata: DUMMY_DATA.slice(fistindex, lastindex),
        tabs: [...Array(pageCount + 1).keys()].slice(1)
    }
}

export const ODERS_TABLE_PANEL = {
    HEADER: [
        'ORDER NUMBER',
        'DATE',
        'STATUS',
        'TOTAL',
        'ACTIONS'
    ],
    BODY: [
        {
            id: '7643980998990',
            name: 'VSCode',
            deadline: new Date(2020, 1, 17),
            type: 'SETUP',
            isComplete: true,
        },
        {
            id: '943980998990',
            name: 'JavaScript',
            deadline: new Date(2020, 2, 28),
            type: 'LEARN',
            isComplete: true,
        },
        {
            id: '879980998990',
            name: 'React',
            deadline: new Date(2020, 3, 8),
            type: 'LEARN',
            isComplete: false,
        }
    ],
}

export const PAYMENT_METHOD = [
    {
        payment_title: 'Direct bank transfer',
        payment_detail: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account'
    },
    {
        payment_title: 'Check payments',
        payment_detail: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account'
    },
    {
        payment_title: 'Cash on delivery',
        payment_detail: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account'
    },
    {
        payment_title: 'PayPal ',
        payment_detail: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account'
    },
]
