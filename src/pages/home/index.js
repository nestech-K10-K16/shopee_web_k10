import React from "react";
import ListCard from "../../components/listcards";
import Slider from "../../components/slider";
import CardShop from "../../components/cardshop";
import { DUMMY_DATA_PRODUCTS } from "../../constants/common";
import "./style.css";

const home = () => {

    const renderCardShop = () => {
        return <>
            {
                DUMMY_DATA_PRODUCTS.map(({ title }) => {
                    return <CardShop title={title} />
                })
            }
        </>
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
