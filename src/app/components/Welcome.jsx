import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Phone} from 'lucide-react';


const Welcome = () => {
    return (
        <section className="md:h-screen flex items-center bg-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16 px-4">
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        src="/about-person.jpeg"
                        alt="Вывоз бытовой техники Минск"
                        width={800}
                        height={900}
                        className="h-auto max-w-full"
                        priority
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h1 className="text-center md:text-left text-3xl md:text-6xl mb-6">
                        Добро пожаловать в компанию <br/><span className="text-yellow-500 font-black mt-3 block">"ВЫВОЗ ТЕХНИКИ"</span>
                    </h1>
                    <p className="text-gray-700 mb-9 leading-9">
                        Наша команда стремится не просто помогать людям избавляться от старой или сломанной бытовой
                        техники,
                        но и делает это быстро, удобно и абсолютно бесплатно. Мы понимаем, что вынести и отвезти тяжелую
                        технику — это сложно, поэтому берём всё на себя.
                    </p>
                    <p className="text-gray-700 mb-8 leading-9">
                        Наша цель — чтобы каждый клиент остался доволен. Поэтому мы не просто вывозим технику — мы
                        приезжаем
                        вовремя, аккуратно всё забираем и освобождаем вам место без лишних хлопот. Мы предоставляем
                        услуги
                        бесплатного вывоза бытовой техники по всему Минску, включая все районы и частный сектор.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 md:gap-16">
                        <Button
                            asChild
                            className="bg-yellow-500 hover:bg-lime-600 text-white text-lg md:text-2xl font-bold uppercase px-9 py-8 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            <a href="#">Подробнее</a>
                        </Button>
                        <a
                            href="tel:+375297621847"
                            className="flex items-center gap-2 text-lg md:text-2xl font-bold text-yellow-500 hover:text-lime-600 transition"
                        >
                            <Phone className="w-6 h-6"/>
                            +375 29 762 18 47
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
