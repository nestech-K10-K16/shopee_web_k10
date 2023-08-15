import React from 'react'
import AppButton from '../Appbutton'
import './style.css'

const ListCard = ({ showTitle = true, renderItem, title }) => {

    const renderTitle = () => {
        return (
            <div className='container-listcards__title-group'>
                <p className='text-font-family_default text-heading1'>{title || 'null'}</p>
                <AppButton className='
                text-font-family_default 
                text-heading4 
                text-color-accent'>
                    View All
                </AppButton>
            </div>
        )
    }

    return (
        <div id='container-listcards'>
            {showTitle ? renderTitle() : <></>}
            <div className='container-listcards__table'>
                {renderItem}
            </div>
        </div>
    )
}

export default ListCard