'use client'
import React from "react"
import Image from "next/image"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {Button} from "@/components/ui/button"
import {Autoplay} from 'swiper/modules';

const slides = [
    {
        image: "/slider_3.jpg",
        title1: "Бесплатный вывоз",
        title2: "Любой бытовой техники в Минске",
        description:
            "Предлагаем надежное и оперативное решение для избавления от ненужной техники в Минске. Бесплатный вывоз холодильников, стиральных машин, плит и другой бытовой техники — абсолютно бесплатно, без каких-либо затрат с вашей стороны.",
        buttonText: "Оформить заказ",
        buttonLink: "#order",
    },
    {
        image: "/slider_1.jpg",
        title1: "Лучший сервис в Минске",
        title2: "Гарантируем удобство и скорость",
        description:
            "Наш сервис в Минске — это быстрое и удобное решение: мы приедем в удобное для вас время, быстро и аккуратно заберём любую бытовую технику. Вы можете рассчитывать на профессиональный подход и максимальный комфорт без лишних хлопот.",
        buttonText: "Заказать вывоз",
        buttonLink: "#form",
    },
    {
        image: "/slider_2.jpg",
        title1: "Индивидуальный подход",
        title2: "С заботой о будущем Минска",
        description:
            "Вся техника из Минска отправляется на лицензированные предприятия для переработки и утилизации в соответствии с экологическими стандартами. Выбирая нас — вы выбираете экологически чистое и безопасное решение.",
        buttonText: "Подробнее",
        buttonLink: "#info",
    },
]



export function CarouselPlugin() {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay]}
            loop={true}
            autoplay={{delay: 6000, disableOnInteraction: false}}
            speed={3500}
            className="w-full h-screen relative"
        >
            {slides.map((slide, index) => {
                // Определим выравнивание текста
                const isTextRight = index === 0 || index === 1;
                const textPositionClass = isTextRight
                    ? "right-20 text-right items-end"
                    : "left-20 text-left items-start";

                return (
                    <SwiperSlide key={index} className="relative w-full h-screen">
                        <Image
                            src={slide.image}
                            alt={slide.title1}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <div
                            className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-white max-w-2xl space-y-4 flex flex-col ${textPositionClass}`}
                        >
                            <h1 className="text-3xl md:text-6xl font-light">{slide.title1}</h1>
                            <h2 className="text-4xl md:text-7xl font-semibold">{slide.title2}</h2>
                            <p className="text-md md:text-xl font-light">{slide.description}</p>
                            <Button
                                asChild
                                className="mt-12 bg-yellow-500 hover:bg-lime-600 text-white text-lg font-bold uppercase px-12 py-8 rounded-lg shadow-lg transition-transform cursor-pointer hover:scale-105 active:scale-95"
                            >
                                <a href={slide.buttonLink}>{slide.buttonText}</a>
                            </Button>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}
