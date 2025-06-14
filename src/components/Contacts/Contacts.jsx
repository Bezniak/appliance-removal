import React from 'react';
import ContactForm from "./ContactForm.jsx";
import {FiMail, FiMapPin, FiPhone} from 'react-icons/fi';
import Map from './Map';
import {BsFacebook, BsInstagram, BsTelegram} from "react-icons/bs";
import {FaViber} from "react-icons/fa";
import {FirstPageScreen} from "../FirstPageScreen/FirstPageScreen.jsx";
import Seo from "../SEO/Seo.jsx";
import {motion} from "framer-motion";
import {SiGmail} from "react-icons/si";

export const Contacts = () => {
    const fadeSlideUp = {
        hidden: {opacity: 0, y: 40},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1], // плавный ease-in-out
            },
        },
    };

    return (
        <>
            <Seo
                title="Контакты | Бесплатный вывоз старой бытовой техники в Минске — быстро и надежно"
                description="Свяжитесь с нами для бесплатного и экологичного вывоза старой бытовой техники в Минске: холодильники, стиральные машины, телевизоры и другая техника."
                keywords={[
                    'контакты вывоз бытовой техники',
                    'бесплатный вывоз техники Минск',
                    'вывоз старой бытовой техники',
                    'утилизация техники в Минске',
                    'экологичный вывоз техники',
                    'связаться вывоз техники',
                    'вывоз техники Минск телефон',
                    'вывоз техники Минск email'
                ]}
            />
            <main>
                <FirstPageScreen
                    title='Свяжитесь с нами'
                    description='Остались вопросы? Мы всегда рады помочь! Позвоните, напишите или заполните форму — и мы обязательно ответим.'
                    img='/contacts.jpg'
                />

                <section
                    className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 py-10 md:py-20"
                    aria-labelledby="contact-info-heading"
                >
                    {/* Левая часть — контактная информация */}
                    <motion.article
                        className="space-y-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.3}}
                        variants={fadeSlideUp}
                    >
                        <h2 id="contact-info-heading" className="text-4xl text-center md:text-left">
                            Контактная информация
                        </h2>
                        <p className="text-lg text-gray-600">
                            Мы на связи каждый день с 09:00 до 19:00. Свяжитесь любым удобным способом!
                        </p>

                        <address className="not-italic w-fit space-y-6 text-gray-700">
                            {/* Телефон */}
                            <div className="group flex items-center gap-4 cursor-pointer">
                                <FiPhone
                                    aria-hidden="true"
                                    className="text-gray-600 text-2xl group-hover:text-[var(--oringe)] transition-colors duration-200"
                                />
                                <a
                                    href="tel:+375297621847"
                                    className="text-gray-600 text-lg group-hover:text-[var(--oringe)] transition-colors duration-200"
                                    aria-label="Позвонить по телефону +375 29 762 18 47"
                                >
                                    +375 29 762 18 47
                                </a>
                            </div>

                            {/* Email */}
                            <div className="group flex items-center gap-4 cursor-pointer">
                                <FiMail
                                    aria-hidden="true"
                                    className="text-gray-600 text-2xl group-hover:text-[var(--oringe)] transition-colors duration-200"
                                />
                                <a
                                    href="mailto:tehnikivyvoz@gmail.com"
                                    className="text-gray-600 text-lg group-hover:text-[var(--oringe)] transition-colors duration-200"
                                    aria-label="Отправить email на info@example.com"
                                >
                                    tehnikivyvoz@gmail.com
                                </a>
                            </div>

                            {/* Адрес */}
                            <div className="group flex items-center gap-4">
                                <FiMapPin aria-hidden="true" className="text-gray-600 text-2xl"/>
                                <p className="text-gray-600 text-lg">г. Минск</p>
                            </div>

                            {/* Соцсети */}
                            <nav aria-label="Социальные сети" className="flex gap-12 mt-16">
                                <a
                                    href="https://www.instagram.com/ivan_bezniak/"
                                    className="text-lime-600 hover:text-[var(--oringe)] transition text-4xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <BsInstagram/>
                                </a>
                                <a
                                    href="viber://chat?number=%2B375297621847"
                                    className="text-lime-600 hover:text-[var(--oringe)] transition text-4xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Viber"
                                >
                                    <FaViber/>
                                </a>
                                <a
                                    href="https://t.me/utilteh"
                                    className="text-lime-600 hover:text-[var(--oringe)] transition text-4xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telegram"
                                >
                                    <BsTelegram/>
                                </a>
                                <a
                                    href="mailto:tehnikivyvoz@gmail.com"
                                    className="text-lime-600 hover:text-[var(--oringe)] transition text-4xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Email"
                                >
                                    <SiGmail/>
                                </a>
                                <a
                                    href="https://www.facebook.com/vanja.besnjak/"
                                    className="text-lime-600 hover:text-[var(--oringe)] transition text-4xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <BsFacebook/>
                                </a>
                            </nav>
                        </address>
                    </motion.article>

                    {/* Форма контакта */}
                    <motion.section
                        aria-label="Форма обратной связи"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.3}}
                        variants={fadeSlideUp}
                    >
                        <ContactForm/>
                    </motion.section>
                </section>

                {/* Карта */}
                <section aria-label="Территория обслуживания по вывозу техники">
                    <Map/>
                </section>
            </main>
        </>
    );
};
