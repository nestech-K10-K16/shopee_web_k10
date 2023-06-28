import React from "react";
import { test } from "../../assets";
import ListCard from "../../components/listcards";
import "./style.css";

const home = () => {
    return (
        <div id="container-home">
            <img src={test} style={{ width: '100%' }} />
            <ListCard />
        </div>
    );
};

export default home;
