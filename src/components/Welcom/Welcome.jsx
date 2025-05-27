import React from "react";
import {Button} from "flowbite-react";
import {FaPhoneAlt} from "react-icons/fa";

const Welcome = () => {
    return (
        <section
            className="flex items-center bg-white md:py-20"
            aria-label="Добро пожаловать в компанию Вывоз Техники"
        >
            <div
                className="relative py-10 container mx-auto flex flex-col md:flex-row items-center justify-between md:gap-16 px-4">
                {/* Изображение */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/man_1.png"
                        alt="Вывоз бытовой техники в Минске — изображение"
                        className="max-w-full h-auto"
                        loading="lazy"
                    />
                </div>

                {/* Текстовый блок */}
                <div className="z-50 w-full md:w-1/2 mt-10 md:mt-0">
                    <h1 className="text-black text-center md:text-left text-3xl md:text-5xl mb-6 leading-tight">
                        Добро пожаловать в компанию
                        <br/>
                        <span className="text-[var(--oringe)] font-bold block mt-3">
                            "ВЫВОЗ ТЕХНИКИ"
                        </span>
                    </h1>
                    <p className="text-gray-500 text-center md:text-left mb-9 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Вывезем вашу старую технику из любой точки Минска — бесплатно, аккуратно
                        и уже сегодня или завтра, без ожиданий и лишних хлопот.
                    </p>

                    <div
                        className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 md:gap-16">
                        <Button
                            onClick={() => {
                                // Можно добавить логику перехода или скролла
                                window.location.href = "#"; // или используйте react-router navigate
                            }}
                            className="!bg-[var(--oringe)] !hover:bg-lime-600 text-white text-lg md:text-xl tracking-widest font-bold uppercase px-7 py-7 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                            aria-label="Подробнее о компании Вывоз Техники"
                        >
                            Подробнее
                        </Button>
                        <a
                            href="tel:+375297621847"
                            className="hidden md:flex items-center gap-2 text-xl font-bold text-[var(--oringe)] hover:text-lime-600 transition"
                            aria-label="Позвонить по телефону +375 29 762 18 47"
                        >
                            <FaPhoneAlt className="w-6 h-6" aria-hidden="true"/>
                            +375 29 762 18 47
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
