import React from "react";
import {Navigate, useParams} from "react-router-dom";
import {services} from "../../store/data";
import {Button, Card} from "flowbite-react";
import {motion} from "framer-motion";

export default function Service() {
    const {id} = useParams();
    const service = services.find((s) => s.href === `/services/${id}`);

    if (!service) {
        return <Navigate to="/notfound" replace/>;
    }

    const {
        title,
        icon,
        img,
        description,
        content: {intro, whyChooseUs, howItWorks, equipmentHandled, ecoFriendlyNote, cta},
    } = service;

    return (

        <div>

            <div className="relative overflow-hidden w-screen h-screen flex items-center justify-center">
                {/* Анимированное изображение */}
                <motion.img
                    src={img}
                    alt="здоровье молочных желез"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{scale: 3}}
                    animate={{scale: [1, 1.05, 1]}}
                    transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
                />
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Анимированный заголовок */}
                <motion.h1
                    key={id} // добавляем key, чтобы элемент "размонтировался" и "смонтировался" заново при смене id
                    className="relative text-white text-3xl md:text-6xl text-center w-[75%] mx-auto"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2}}
                >
                    {title.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.6, delay: index * 0.05}}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

            </div>


            <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-10 lg:px-24">
                {/* Content Sections */}
                <div className="space-y-10 text-gray-800">
                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Что мы предлагаем</h2>
                        <p>{intro}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Почему выбирают нас</h2>
                        <p>{whyChooseUs}</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Как это работает</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            {howItWorks.split("\n").map((step, index) => (
                                <li key={index}>{step.trim()}</li>
                            ))}
                        </ul>
                    </section>

                    {equipmentHandled && (
                        <section>
                            <h2 className="text-2xl font-semibold mb-2">Мы вывозим</h2>
                            <p>{equipmentHandled}</p>
                        </section>
                    )}

                    <section>
                        <h2 className="text-2xl font-semibold mb-2">Забота об экологии</h2>
                        <p>{ecoFriendlyNote}</p>
                    </section>

                    {/* CTA Section */}
                    <Card className="bg-white shadow-lg mt-10 p-6 text-center">
                        <h3 className="text-xl font-bold mb-4">{cta}</h3>
                        <Button href="/#form" color="success">
                            Заказать вывоз
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
