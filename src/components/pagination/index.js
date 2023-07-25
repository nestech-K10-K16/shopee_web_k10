import React, { useState } from 'react'
import { ITEM_PER_PAGE, handlePagination } from '../../constants/common';
import AppButton from '../Appbutton';
import CardPost from '../cardpost/inbdex';
import "./style.css"

const Pagination = () => {
    console.log('Pagination')
    const [currentPage, setCurrentpage] = useState(1);
    const { shortdata, tabs } = handlePagination(currentPage, ITEM_PER_PAGE)

    return (
        <>
            <div id='container-Pagination-content-group'>
                {
                    shortdata.map(value => {
                        return <CardPost title={value.title} />
                    })
                }
            </div>
            <div id='container-pagination-tabs-group'>
                {
                    tabs.map((value) => {
                        return <AppButton onClick={() => setCurrentpage(value)} className={`container-pagination__tab ${currentPage === value ? 'active' : ''} `}>
                            {value}
                        </AppButton>
                    })
                }
            </div>
        </>

    )
}

export default Pagination