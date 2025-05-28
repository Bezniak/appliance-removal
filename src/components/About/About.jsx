import React from "react";
import {motion} from "framer-motion";
import {Leaf, Recycle, ShieldCheck, Sparkles, Timer, Truck,} from "lucide-react";
import {FirstPageScreen} from "../FirstPageScreen/FirstPageScreen.jsx";
import Seo from "../SEO/Seo.jsx";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";


const techReasons = [
    {
        icon: <Recycle className="size-28 text-lime-600"/>,
        text: "Старая техника содержит токсичные компоненты. Их нельзя просто выбрасывать — это опасно для почвы и воды.",
    },
    {
        icon: <ShieldCheck className="size-28 text-lime-600"/>,
        text: "Мы работаем с сертифицированными переработчиками. Каждое устройство проходит безопасную утилизацию.",
    },
    {
        icon: <Truck className="size-28 text-lime-600"/>,
        text: "У нас своя команда и техника. Мы решаем задачи быстро и самостоятельно.",
    },
];
const howItWorksSteps = [
    ["📞", "Оформление заявки", "Оставьте заявку на сайте или позвоните нам."],
    ["📅", "Согласование", "Мы уточняем удобное время для вывоза."],
    ["🚛", "Вывоз", "Приезжаем, выносим технику, грузим аккуратно."],
    ["🌱", "Экологичная утилизация", "Контролируем каждый этап, чтобы техника не навредила природе."],
];
const values = [
    {
        icon: <ShieldCheck className="size-12 text-lime-600"/>,
        title: "Ответственность",
        desc: "Работаем официально, без скрытых условий и подводных камней.",
    },
    {
        icon: <Timer className="size-12 text-lime-600"/>,
        title: "Скорость",
        desc: "Выезд в день обращения или на следующий день.",
    },
    {
        icon: <Sparkles className="size-12 text-lime-600"/>,
        title: "Чистота",
        desc: "Убираем за собой, не оставляя следов.",
    },
    {
        icon: <Leaf className="size-12 text-lime-600"/>,
        title: "Экология",
        desc: "Старая техника становится вторсырьём, а не мусором.",
    },
];

export default function About() {
    return (
        <>
            <Seo
                title="О нас | Бесплатный вывоз старой техники в Минске"
                description="Вывоз техники в Минске — бесплатный и экологичный вывоз старой бытовой техники: холодильников, стиральных машин, телевизоров и другой техники. Быстро, надежно и безопасно."
                keywords={[
                    'вывоз техники',
                    'бесплатный вывоз техники',
                    'утилизация бытовой техники',
                    'экологичный вывоз техники',
                    'вывоз бытовой техники в Минске',
                    'вывоз старой техники',
                    'утилизация техники Минск'
                ]}
            />
            <FirstPageScreen
                title="Экологично. Бесплатно. Профессионально."
                description="Мы — компания по вывозу старой бытовой техники в Минске. Наша цель — не просто избавиться от хлама, а помочь природе и людям. Мы делаем это абсолютно бесплатно, безопасно и с заботой о будущем."
                img="/aboutUs.jpg"
            />

            <main className="bg-white text-gray-900 space-y-24">
                <motion.section
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="container mx-auto py-16 px-4 space-y-10"
                    aria-label="Причины утилизации техники"
                >
                    <h2 className="text-3xl md:text-4xl text-center">
                        Ответственный сбор техники — первый шаг к защите природы
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {techReasons.map((item, index) => (
                            <article
                                key={index}
                                className="flex items-center space-x-4 rounded-2xl shadow-md bg-white p-4"
                            >
                                {item.icon}
                                <p className="text-gray-700">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                    className="relative py-20 bg-fixed bg-center bg-no-repeat bg-cover"
                    style={{backgroundImage: "url(/aboutUs_2.jpeg)"}}
                    aria-label="Процесс работы"
                >
                    <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true"/>
                    <div className="relative z-10 text-white px-4">
                        <h2 className="text-3xl md:text-4xl text-center mb-12">Как мы работаем</h2>
                        <div className="container mx-auto grid md:grid-cols-4 gap-6 text-center">
                            {howItWorksSteps.map(([emoji, title, desc], index) => (
                                <article
                                    key={index}
                                    className="p-6 bg-white/90 border border-gray-200 rounded-xl shadow hover:shadow-lg transition text-gray-800"
                                >
                                    <div className="text-5xl mb-3">{emoji}</div>
                                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                    <p className="text-gray-500">{desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{opacity: 0, x: 30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="space-y-12 px-4  bg-gray-50"
                    aria-label="Ценности компании"
                >
                    <h2 className="text-3xl md:text-4xl text-center">Наши ценности</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {values.map((item, index) => (
                            <article
                                key={index}
                                className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
                            >
                                {item.icon}
                                <div>
                                    <h3 className="text-xl mb-1">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center space-y-6 bg-gray-700 py-20 px-4"
                    aria-label="Призыв к действию"
                >
                    <h2 className="text-3xl md:text-4xl text-white">Готовы освободить пространство?</h2>
                    <p className="text-white text-lg mb-16">Заполните заявку — и мы приедем в удобное для вас время.</p>
                    <NavLink
                        to={ROUTES.BOOKING}
                        onClick={handleClick}
                        size="lg"
                        className="bg-[var(--oringe)] hover:bg-lime-600 transition mx-auto text-white px-8 py-4 rounded-xl shadow-lg"
                    >
                        Оставить заявку
                    </NavLink>
                </motion.section>
            </main>
        </>
    );
}
