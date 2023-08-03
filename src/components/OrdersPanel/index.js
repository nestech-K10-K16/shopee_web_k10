import React from 'react'
import "./style.css"
import CustomTable from '../CustomTable'

const OrdersPanel = () => {
    return (
        <div id='container-order-panel'>
            <CustomTable />
            <div className='padding'></div>
        </div>
    )
}

export default OrdersPanel