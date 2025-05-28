import React from 'react';
import {CheckCircle} from 'lucide-react';
import {FirstPageScreen} from "../FirstPageScreen/FirstPageScreen.jsx";
import Seo from "../SEO/Seo.jsx";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";
import { motion } from "framer-motion";


export const Conditions = () => {
    const conditions = [
        "Вывозим старую, сломанную и ненужную технику — бесплатно.",
        "Обслуживаем все районы Минска и частный сектор.",
        "Выезд возможен в день обращения или на следующий день.",
        "Забираем с любого этажа — даже без лифта.",
        "Работаем аккуратно, пунктуально и без лишних вопросов.",
        "Все работы выполняют вежливые и опытные сотрудники.",
        "Вывозим холодильники, стиральные машины, плиты и другую крупную технику.",
        "Всё просто — вы звоните, мы приезжаем и освобождаем место."
    ];

    return (
        <div>
            <Seo
                title="Условия бесплатного вывоза техники в Минске"
                description="Узнайте условия бесплатного вывоза старой и ненужной техники в Минске. Работаем быстро, аккуратно и без лишних хлопот. Обслуживаем все районы города."
                keywords={[
                    "бесплатный вывоз техники",
                    "утилизация техники Минск",
                    "вывоз холодильника Минск",
                    "вывоз стиральной машины",
                    "бесплатный вывоз крупной бытовой техники"
                ]}
            />

            <FirstPageScreen
                title="Условия бесплатного вывоза техники в Минске"
                description="Узнайте, как быстро и удобно избавиться от ненужной бытовой техники с нашей бесплатной услугой вывоза."
                img="/condition_2.jpeg"
            />

            <main className="min-h-screen py-10 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <section id="conditions" aria-label="Условия бесплатного вывоза техники в Минске">
                        <h2 className="text-4xl mb-10 text-center">
                            Почему выбирают наш сервис вывоза техники
                        </h2>
                        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                            {conditions.map((condition, index) => (
                                <li
                                    key={index}
                                    className="flex items-center shadow-sm p-5 rounded-2xl border border-gray-200"
                                >
                                    <CheckCircle className="text-[var(--oringe)] mt-1 mr-4 w-9 h-9 flex-shrink-0"/>
                                    <p className="text-base md:text-lg leading-relaxed">
                                        {condition}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section
                        id="contact-cta"
                        className="mt-20 flex flex-col md:flex-row items-center justify-between gap-20 px-6 md:px-20"
                    >
                        <motion.div
                            className="md:w-1/2"

                        >
                            <img
                                src="/OldTechnics.png"
                                alt="Вывоз техники минск"
                                className="w-full h-auto max-w-md mx-auto md:mx-0"
                                loading="lazy"
                            />
                        </motion.div>

                        {/* Текст и кнопка */}
                        <div className="md:w-1/2 space-y-6 flex justify-center md:justify-start flex-col">
                            <h3 className="text-2xl text-center md:text-left md:text-3xl font-semibold text-gray-800">
                                Готовы освободить место от старой техники?
                            </h3>
                            <p className="text-lg text-center md:text-left text-gray-600">
                                Оформите заявку на бесплатный вывоз прямо сейчас.
                            </p>
                            <NavLink
                                to={ROUTES.BOOKING}
                                onClick={handleClick}
                                className="mx-auto md:mt-10 bg-[var(--oringe)]  hover:bg-lime-600 tracking-widest uppercase text-white font-semibold py-4 px-8 rounded-xl transition duration-300"
                            >
                                Оставить заявку
                            </NavLink>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};
