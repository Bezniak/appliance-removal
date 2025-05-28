import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/routes.js";
import { handleClick } from "../../common/helpers.js";

const Welcome = () => {
    const controls = useAnimation();
    // triggerOnce: false, чтобы срабатывать при каждом появлении
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.2, duration: 0.7 },
        }),
    };

    return (
        <section
            className="flex items-center bg-white md:py-20"
            aria-label="Добро пожаловать в компанию Вывоз Техники"
        >
            <div
                ref={ref}
                className="relative py-10 container mx-auto flex flex-col md:flex-row items-center justify-between md:gap-16 px-4"
            >
                {/* Анимированное изображение */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <motion.img
                        src="/man_1.png"
                        alt="Вывоз бытовой техники в Минске — изображение"
                        className="max-w-full h-auto"
                        loading="lazy"
                    />
                </div>

                {/* Анимированный текстовый блок */}
                <div className="z-50 w-full md:w-1/2 mt-10 md:mt-0">
                    <motion.h1
                        className="text-black text-center md:text-left text-3xl md:text-5xl mb-6 leading-tight"
                        variants={textVariants}
                        initial="hidden"
                        animate={controls}
                        custom={1}
                    >
                        Добро пожаловать в компанию
                        <br />
                        <motion.span
                            className="text-[var(--oringe)] font-bold block mt-3"
                            variants={textVariants}
                            custom={2}
                        >
                            "ВЫВОЗ ТЕХНИКИ"
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-500 text-center md:text-left mb-9 leading-relaxed max-w-lg mx-auto md:mx-0"
                        variants={textVariants}
                        initial="hidden"
                        animate={controls}
                        custom={3}
                    >
                        Вывезем вашу старую технику из любой точки Минска — бесплатно,
                        аккуратно и уже сегодня или завтра, без ожиданий и лишних хлопот.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 md:gap-16"
                        variants={textVariants}
                        initial="hidden"
                        animate={controls}
                        custom={4}
                    >
                        <NavLink
                            to={ROUTES.ABOUT_US}
                            onClick={handleClick}
                            className="!bg-[var(--oringe)] !hover:bg-lime-600 text-white text-lg md:text-xl tracking-widest font-bold uppercase px-7 py-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                            aria-label="Подробнее о компании Вывоз Техники"
                        >
                            Подробнее
                        </NavLink>
                        <a
                            href="tel:+375297621847"
                            className="hidden md:flex items-center gap-2 text-xl font-bold text-[var(--oringe)] hover:text-lime-600 transition"
                            aria-label="Позвонить по телефону +375 29 762 18 47"
                        >
                            <FaPhoneAlt className="w-6 h-6" aria-hidden="true" />
                            +375 29 762 18 47
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
