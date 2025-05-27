import React from "react";
import {Navigate, useParams} from "react-router-dom";
import {services} from "../../store/data";
import {motion} from "framer-motion";
import HowWeWork from "../HowWeWork/HowWeWork.jsx";

export default function Service() {
    const {id} = useParams();
    const service = services.find((s) => s.href === `/services/${id}`);

    if (!service) {
        return <Navigate to="/notfound" replace/>;
    }

    const {title, img, content, description} = service;
    const {intro, whyChooseUs, ecoFriendlyNote, cta} = content;


    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans leading-relaxed">
            {/* Hero Section */}
            <div className="relative h-screen md:h-[80vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
                <motion.img
                    key={id}
                    src={img}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{scale: 1.5}}
                    animate={{scale: 1}}
                    transition={{duration: 2}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"/>

                <div className="absolute inset-0 w-full flex flex-col items-center justify-center px-4">
                    {/* Заголовок */}
                    <motion.h1
                        key={id}
                        className="z-10 text-white text-4xl md:text-5xl mb-10 text-center px-6 tracking-tight drop-shadow-lg"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.2}}
                    >
                        {title.split("").map((char, index) => (
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
                        key={`${id}-desc`}
                        className="z-10 mt-4 text-white text-lg md:text-xl text-center max-w-3xl px-6"
                        initial={{opacity: 0, y: -50}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1.2, delay: title.length * 0.03 + 0.2}}
                    >
                        {description.split("").map((char, index) => (
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


            <section className="bg-gradient-to-b from-gray-500 via-gray-700 to-gray-900 py-10 md:py-20 px-5">
                <div className="max-w-6xl mx-auto space-y-8 md:space-y-32">

                    {/* Блок 1 — текст слева */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                    >
                        <div className="md:w-1/2 text-left">
                            <h2 className="text-3xl text-white mb-6 leading-tight">
                                Освободите место — легко и без стресса
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">{intro}</p>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/moving.png"
                                alt="Организация пространства"
                                className="w-full h-32 md:h-44 object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Блок 2 — текст справа */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
                    >
                        <div className="md:w-1/2 text-right">
                            <h2 className="text-3xl text-white mb-6 leading-tight">
                                Почему выбирают нас
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">{whyChooseUs}</p>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/guaranteed.png"
                                alt="Довольный клиент"
                                className="w-full h-32 md:h-44 object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Блок 3 — текст слева */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
                    >
                        <div className="md:w-1/2 text-left">
                            <h2 className="text-3xl text-white mb-6 leading-tight">
                                Экологический подход
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">{ecoFriendlyNote}</p>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/eco-friendly.png"
                                alt="Экология"
                                className="w-full h-32 md:h-44 object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </section>
            <HowWeWork key={id} title={cta}/>
        </div>
    );
}
