import React from 'react';
import {Carousel} from "../components/Carousel/Carousel.jsx";
import Welcome from "../../public/Welcom/Welcome.jsx";
import {Cards} from "../components/Cards/Cards.jsx";
import Hero from "../components/Hero/Hero.jsx";
import TestimonialsSlider from "../components/TestimonialsSlider/TestimonialsSlider.jsx";
import {AnyQuestions} from "../components/AnyQuestions/AnyQuestions.jsx";
import HowWeWork from "../components/HowWeWork/HowWeWork.jsx";

const Home = () => {
    return (
        <>
            <main>
                <Carousel/>
                <Welcome/>
                <Cards/>
                <Hero/>
                <HowWeWork/>
                <TestimonialsSlider/>
                <AnyQuestions/>
            </main>
        </>
    );
};

export default Home;
