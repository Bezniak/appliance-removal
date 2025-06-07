import React from 'react';
import Welcome from "../components/Welcom/Welcome.jsx";
import {Cards} from "../components/Cards/Cards.jsx";
import Hero from "../components/Hero/Hero.jsx";
import TestimonialsSlider from "../components/TestimonialsSlider/TestimonialsSlider.jsx";
import {AnyQuestions} from "../components/AnyQuestions/AnyQuestions.jsx";
import HowWeWork from "../components/HowWeWork/HowWeWork.jsx";
import {ServiceJsonLd} from "../components/Cards/ServiceJsonLd.jsx";
import Seo from "../components/SEO/Seo.jsx";
import Numbers from "../components/Numbers/Numbers.jsx";
import Faq from "../components/FAQ/Faq.jsx";

const Home = () => {
    const title = "ВЫВОЗ ТЕХНИКИ";
    const description = "Бесплатный и аккуратный вывоз бытовой техники по Минску. Вывезём вашу старую технику сегодня или завтра без хлопот и ожиданий.";
    const keywords = [
        "вывоз техники минск",
        "бесплатный вывоз техники",
        "утилизация бытовой техники",
        "вывоз стиральной машины",
        "старую технику забрать",
        "вывоз холодильников минск",
        "заказать вывоз холодильника",
        "заказать вывоз стиральной машины ",
        "заказать вывоз газовой плиты",
        "заказать вывоз газовой телевизора",
        "вывоз телевизоров минск",
        "утилизация старой техники",
        "быстрый вывоз техники минск",
        "вывоз бытовой техники бесплатно",
        "экологичный вывоз техники"
    ];

    return (
        <>
            <Seo
                title={`${title} | Бесплатный вывоз техники в Минске`}
                description={description}
                keywords={keywords}
            />
            <main>
                <Hero/>
                <Welcome/>
                <ServiceJsonLd/>
                <Cards/>
                <HowWeWork/>
                <Numbers/>
                <TestimonialsSlider/>
                <Faq/>
                <AnyQuestions/>
            </main>
        </>
    );
};

export default Home;
