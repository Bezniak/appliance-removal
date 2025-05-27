import React, { useRef } from "react";
import { HiPhone } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes.js";
import { handleClick } from "../../common/helpers.js";
import { motion, useInView } from "framer-motion";

const steps = [
    { emoji: "📞", text: "Свяжитесь с нами любым удобным способом — звонок, мессенджер или онлайн-заявка" },
    { emoji: "📅", text: "Согласуем удобное время и уточним детали выезда" },
    { emoji: "🚚", text: "Профессиональная команда приедет точно в назначенное время" },
    { emoji: "📦", text: "Аккуратно и безопасно погрузим всю технику" },
    { emoji: "♻️", text: "Организуем экологичную утилизацию или переработку техники" },
    { emoji: "🎁", text: "Услуга полностью бесплатна — никаких скрытых платежей" },
];

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const swingAnimation = {
    rotate: [0, 1, -1, 1, 0],  // всего ±1 градус
    transition: {
        duration: 6,            // медленно, 6 секунд на полный цикл
        ease: "easeInOut",
        repeat: Infinity,
    },
};


export default function HowWeWork({ title }) {
    // Создаем ref для блока текста
    const textRef = useRef(null);

    // Проверяем, виден ли блок текста (true/false)
    // Параметры: once: false - чтобы срабатывало каждый раз, как входит в зону видимости
    const isInView = useInView(textRef, { once: false, margin: "-100px" });

    return (
        <section
            className="bg-white px-0 py-10 md:py-20"
            aria-labelledby="how-we-work-title"
            role="region"
        >
            <div className="container mx-auto grid md:grid-cols-2 gap-0 md:gap-16 items-center">
                {/* Мобильная картинка с анимацией покачивания */}
                <motion.div className="md:hidden flex justify-center" animate={swingAnimation}>
                    <img
                        src="/many.png"
                        alt="Вывоз техники в минске бесплатно"
                        className="max-w-xl w-full object-contain rounded-3xl"
                        loading="lazy"
                    />
                </motion.div>

                {/* Текст с анимацией появления при прокрутке */}
                <motion.div
                    ref={textRef}
                    className="flex flex-col justify-center space-y-10 px-6"
                    variants={textVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <header>
                        {title ? (
                            <h2
                                id="how-we-work-title"
                                className="text-center md:text-left text-2xl md:text-3xl text-gray-900 leading-tight"
                            >
                                {title}
                            </h2>
                        ) : (
                            <h2
                                id="how-we-work-title"
                                className="text-3xl md:text-5xl text-gray-900 leading-tight"
                            >
                                Бесплатный вывоз <span className="text-lime-600">любых видов техники</span> в Минске
                            </h2>
                        )}
                        <div
                            className="mt-4 w-1/2 h-1 bg-gradient-to-r from-lime-300 to-lime-600 rounded-full shadow-md"
                            aria-hidden="true"
                        />
                    </header>

                    <p className="text-lg text-gray-600 max-w-lg tracking-wide" tabIndex={0}>
                        Мы оперативно и бесплатно вывозим всю бытовую и офисную технику — от старых компьютеров и
                        принтеров до крупногабаритной электроники. Надежно, быстро и с заботой об окружающей среде.
                    </p>

                    <ol
                        className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 list-decimal list-inside"
                        aria-label="Шаги нашей работы"
                    >
                        {steps.map(({ emoji, text }, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-6 group cursor-default"
                                aria-label={`Шаг ${index + 1}: ${text}`}
                            >
                <span
                    className="flex items-center justify-center p-3 rounded-full text-white text-2xl transform transition-transform duration-300 group-hover:scale-350"
                    aria-hidden="true"
                >
                  {emoji}
                </span>
                                <p className="text-gray-600 leading-relaxed text-lg">{text}</p>
                            </li>
                        ))}
                    </ol>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:pt-8">
                        <NavLink
                            to={ROUTES.BOOKING}
                            className="bg-lime-600 hover:bg-[var(--oringe)] text-white text-base md:text-lg tracking-widest font-semibold uppercase px-5 py-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                            aria-label="Оставить заявку на вывоз техники"
                            type="button"
                            onClick={handleClick}
                        >
                            Оставить заявку
                        </NavLink>
                        <a
                            className="flex items-center text-lime-600 hover:text-[var(--oringe)] transition text-base md:text-lg font-semibold select-none"
                            href="tel:+375333669979"
                            aria-label="Позвонить по телефону +375 29 762 18 47"
                        >
                            <HiPhone className="mr-4 text-3xl" aria-hidden="true" />
                            +375 29 762 18 47
                        </a>
                    </div>
                </motion.div>

                {/* Десктоп картинка с анимацией покачивания */}
                <motion.div className="hidden md:flex justify-center" animate={swingAnimation}>
                    <img
                        src="/many.png"
                        alt="Рабочий указывает на информацию о вывозе техники"
                        className="max-w-xl w-full object-contain rounded-3xl"
                        loading="lazy"
                    />
                </motion.div>
            </div>
        </section>
    );
}
