import React, { Suspense } from "react";
import ListCard from "../../components/listcards";
import Slider from "../../components/slider";

import { DUMMY_DATA_PRODUCTS } from "../../constants/common";
import "./style.css";

const CardShop = React.lazy(() => import('../../components/cardshop'))

const home = () => {

    const renderCardShop = () => {
        return <>
            <Suspense fallback={<p className="text-color-black">Loading...</p>}>
                {
                    DUMMY_DATA_PRODUCTS.map(({ title }) => {
                        return <CardShop title={title} />
                    })
                }
            </Suspense>
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
