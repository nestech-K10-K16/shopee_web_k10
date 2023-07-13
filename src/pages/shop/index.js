import React from 'react'
import ListCard from '../../components/listcards'
import CardShop from '../../components/cardshop'
import './style.css'

const shop = () => {


    const renderCardShop = () => {
        return (
            <>
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
            </>
        )
    }

    return (
        <div className='container-shop'>
            <ListCard
                showTitle={false}
                renderItem={renderCardShop()}
            />
        </div>
    )
}

export default shop