import React from "react";
import ListCard from "../../components/listcards";
import Slider from "../../components/slider";
import CardShop from "../../components/cardshop";
import "./style.css";

const home = () => {

    const renderCardShop = () => {
        return (
            <>
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
                <CardShop onClickCard={() => console.log('first')} />
            </>
        )
    }

    return (
        <div id="container-home">
            <Slider />
            <ListCard
                title={'Shop The Latest'}
                renderItem={renderCardShop()}
            />
        </div>
    );
};

export default home;
