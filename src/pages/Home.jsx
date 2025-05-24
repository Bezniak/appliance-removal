import React from 'react';
import {Carousel} from "../components/Carousel/Carousel.jsx";
import Welcome from "../../public/Welcom/Welcome.jsx";
import {Cards} from "../components/Cards/Cards.jsx";

const Home = () => {
    return (
        <>
            <main>
                <Carousel/>
                <Welcome/>
                <Cards/>
            </main>
        </>
    );
};

export default Home;
