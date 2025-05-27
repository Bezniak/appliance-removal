import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { services } from "../../store/data";
import { motion } from "framer-motion";
import HowWeWork from "../HowWeWork/HowWeWork.jsx";
import { FirstPageScreen } from "../FirstPageScreen/FirstPageScreen.jsx";
import Seo from "../Seo/Seo.jsx"; // убедись, что путь к Seo.jsx правильный

export default function Service() {
    const { id } = useParams();
    const service = services.find((s) => s.href === `/services/${id}`);

    if (!service) {
        return <Navigate to="/notfound" replace />;
    }

    const { title, img, content, description } = service;
    const { intro, whyChooseUs, ecoFriendlyNote, cta } = content;

    const keywords = [
        'бесплатный вывоз техники',
        'утилизация бытовой техники',
        'экологичный вывоз',
        'вывоз старой техники в Минске',
        'утилизация старой техники',
        'вывоз техники Минск',
        'утилизация электроники'
    ];

    return (
        <>
            <Seo
                title={`${title} | Бесплатный вывоз техники в Минске`}
                description={description}
                keywords={keywords}
            />

            <div className="min-h-screen bg-white text-gray-800 font-sans leading-relaxed">
                <FirstPageScreen title={title} description={description} img={img} />

                <section className="bg-gradient-to-b from-gray-500 via-gray-700 to-gray-900 py-10 md:py-20 px-5">
                    <div className="max-w-6xl mx-auto space-y-8 md:space-y-32">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
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

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
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

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
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

                <HowWeWork key={id} title={cta} />
            </div>
        </>
    );
}
