import React from 'react';
import {Button} from "flowbite-react";
import {FaPhoneAlt} from "react-icons/fa";


const Welcome = () => {
    return (
        <section className="flex items-center bg-white md:py-20">
            <div
                className="relative py-10 container mx-auto flex flex-col md:flex-row items-center justify-between md:gap-16 px-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="/about-person.jpeg"
                        alt="Вывоз бытовой техники Минск"
                        className="h-auto max-w-full hidden md:block"
                    />
                </div>

                <div className="md:hidden absolute inset-0 bg-[url(/about-person.jpeg)] bg-cover bg-center"></div>
                <div className="md:hidden absolute inset-0 bg-black/50"></div>

                <div className="z-50 w-full md:w-1/2">
                    <h1 className="text-white md:text-black text-center md:text-left text-3xl md:text-5xl mb-6">
                        Добро пожаловать в компанию <br/><span className="text-yellow-500 font-bold mt-3 block">"ВЫВОЗ ТЕХНИКИ"</span>
                    </h1>
                    <p className=" text-white md:text-gray-500 mb-9 leading-9">
                        Наша команда стремится не просто помогать людям избавляться от старой или сломанной бытовой
                        техники,
                        но и делает это быстро, удобно и абсолютно бесплатно. Мы понимаем, что вынести и отвезти тяжелую
                        технику — это сложно, поэтому берём всё на себя.
                    </p>
                    <p className="text-white md:text-gray-500 mb-8 leading-9">
                        Наша цель — чтобы каждый клиент остался доволен. Поэтому мы не просто вывозим технику — мы
                        приезжаем
                        вовремя, аккуратно всё забираем и освобождаем вам место без лишних хлопот. Мы предоставляем
                        услуги
                        бесплатного вывоза бытовой техники по всему Минску, включая все районы и частный сектор.
                    </p>
                    <div
                        className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 md:gap-16">
                        <Button
                            className="!bg-yellow-500 hover:bg-lime-600 text-white text-lg md:text-xl tracking-widest font-bold uppercase px-7 py-7 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            <a href="#">Подробнее</a>
                        </Button>
                        <a
                            href="tel:+375297621847"
                            className="hidden md:flex items-center gap-2 text-xl font-bold text-yellow-500 hover:text-lime-600 transition"
                        >
                            <FaPhoneAlt className="w-6 h-6"/>
                            +375 29 762 18 47
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
