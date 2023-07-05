import React from "react";
import ListCard from "../../components/listcards";
import Slider from "../../components/slider";
import "./style.css";

const home = () => {
    return (
        <div id="container-home">
            <Slider />
            <ListCard />
        </div>
    );
};

export default home;
