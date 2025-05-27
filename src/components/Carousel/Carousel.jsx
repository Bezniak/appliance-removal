'use client';
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Autoplay} from "swiper/modules";
import {slides} from "../../store/data.js";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";


function SlideTextBlock({slide, align = "right"}) {
    const textPositionClass =
        align === "right"
            ? "right-5 pl-5 md:right-20 text-right items-end"
            : "left-5 pr-5 md:left-20 text-left items-start";

    return (
        <div
            className={`absolute top-1/2 transform -translate-y-1/2 z-10 text-white w-fit md:max-w-3xl space-y-4 flex flex-col ${textPositionClass}`}
            aria-label={`Слайд: ${slide.title1} ${slide.title2}`}
        >
            <h1 className="text-3xl md:text-6xl font-light">{slide.title1}</h1>
            <h2 className="text-4xl md:text-7xl font-semibold">{slide.title2}</h2>
            <p className="text-md md:text-xl font-light">{slide.description}</p>
            <NavLink
                to={ROUTES.BOOKING}
                onClick={handleClick}
                className="mt-12 !bg-[var(--oringe)] hover:bg-lime-600 text-white text-lg font-bold uppercase px-10 py-4 rounded-lg shadow-lg transition-transform cursor-pointer hover:scale-105 active:scale-95"
            >
                {slide.buttonText}
            </NavLink>
        </div>
    );
}

export function Carousel() {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            loop={true}
            autoplay={{delay: 6000, disableOnInteraction: false}}
            speed={3500}
            modules={[Autoplay]}
            className="w-full h-screen relative"
        >
            {slides.map((slide, index) => {
                const isRightAligned = index === 0 || index === 1;

                return (
                    <SwiperSlide key={index} className="relative w-full h-screen">
                        <img
                            src={slide.image}
                            alt={`${slide.title1} — ${slide.title2}`}
                            title={`${slide.title1} — ${slide.title2}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50" aria-hidden="true"/>
                        <SlideTextBlock slide={slide} align={isRightAligned ? "right" : "left"}/>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
