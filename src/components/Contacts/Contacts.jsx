import React from 'react'
import {motion} from 'framer-motion'
import ContactForm from "./ContactForm.jsx";
import {FiMail, FiMapPin, FiPhone} from 'react-icons/fi';
import Map from './Map';
import {FooterIcon} from "flowbite-react";
import {BsInstagram, BsTelegram} from "react-icons/bs";
import {FaViber} from "react-icons/fa";

export const Contacts = () => {
    const title = 'Свяжитесь с нами'
    const description =
        'Остались вопросы? Мы всегда рады помочь! Позвоните, напишите или заполните форму — и мы обязательно ответим.'


    return (
        <div>
            {/* Шапка с фоном */}
            <div
                className="relative h-screen md:h-[80vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
                <motion.img
                    src="/contacts.jpg"
                    alt="Контакты"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{scale: 1.5}}
                    animate={{scale: 1}}
                    transition={{duration: 2}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <motion.h1
                        className="text-white text-4xl md:text-5xl mb-10 text-center px-6 tracking-tight drop-shadow-lg"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.2}}
                    >
                        {title.split('').map((char, index) => (
                            <motion.span
                                key={`title-${index}`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: index * 0.03}}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.p
                        className="text-white text-lg md:text-xl text-center max-w-3xl px-6"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.2, delay: title.length * 0.03 + 0.2}}
                    >
                        {description.split('').map((char, index) => (
                            <motion.span
                                key={`desc-${index}`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: index * 0.02}}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                </div>
            </div>

            {/* Контактная информация + форма */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-8 py-10 md:py-20">
                {/* Левая часть — контактная информация */}
                <div className="space-y-8">
                    <h2 className="text-4xl text-center md:text-left">Контактная информация</h2>
                    <p className="text-lg text-gray-600">
                        Мы на связи каждый день с 10:00 до 20:00. Свяжитесь любым удобным способом!
                    </p>
                    <div className="w-fit space-y-6 text-gray-700">
                        <div className="group flex items-center gap-4 cursor-pointer">
                            <FiPhone
                                className="text-gray-600 text-2xl group-hover:text-yellow-600 transition-colors duration-200"/>
                            <a href="tel:+375297621847"
                               className="text-gray-600 text-lg group-hover:text-yellow-600 transition-colors duration-200">
                                +375 29 762 18 47
                            </a>
                        </div>

                        <div className="group flex items-center gap-4 cursor-pointer">
                            <FiMail
                                className="text-gray-600 text-2xl group-hover:text-yellow-600 transition-colors duration-200"/>
                            <a href="mailto:info@example.com"
                               className="text-gray-600 text-lg group-hover:text-yellow-600 transition-colors duration-200">
                                info@example.com
                            </a>
                        </div>

                        <div className="group flex items-center gap-4">
                            <FiMapPin className="text-gray-600 text-2xl"/>
                            <p className="text-gray-600 text-lg ">
                                г. Минск
                            </p>
                        </div>

                        <div className="flex gap-18 mt-16">
                            <a
                                href="https://www.instagram.com/ivan_bezniak/"
                                className="text-lime-600 hover:text-yellow-600 transition text-4xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsInstagram />
                            </a>
                            <a
                                href="viber://chat?number=%2B375297621847"
                                className="text-lime-600 hover:text-yellow-600 transition text-4xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaViber />
                            </a>
                            <a
                                href="https://t.me/utilteh"
                                className="text-lime-600 hover:text-yellow-600 transition text-4xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsTelegram />
                            </a>
                        </div>

                    </div>

                </div>
                <ContactForm/>
            </div>
            <Map/>
        </div>
    )
}
