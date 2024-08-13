import React from "react";
import Hero from "../../companents/hero/Hero";
import Catigory from "../../companents/catigoriy/Catigory";
import Goods from "../../companents/goods/Goods";
import Stock from "../../companents/stock/Stock";
import Popular from "../../companents/popular/Popular";

const Home = () => {
    return (
        <main>
            <Hero />
            <Catigory />
            <Goods />
            <Stock />
            <Popular />
        </main>
    );
};

export default Home;
