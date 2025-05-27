import {motion} from "framer-motion";
import {Leaf, PhoneCall, Recycle, ShieldCheck, Sparkles, Timer, Truck} from "lucide-react";
import {Button} from "flowbite-react";
import React from "react";

export default function About() {

    const title = 'Экологично. Бесплатно. Профессионально.'
    const description = 'Мы — компания по вывозу старой бытовой техники в Минске. Наша цель — не просто избавиться от хлама, а помочь природе и людям. Мы делаем это абсолютно бесплатно, безопасно и с заботой о будущем.'

    return (
        <div>
            <div
                className="relative h-screen md:h-[80vh] min-h-[400px] w-full !overflow-hidden flex items-center justify-center">
                <motion.img
                    src='/aboutUs.jpg'
                    alt='О нас'
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{scale: 1.5, transformOrigin: 'center'}}
                    animate={{scale: 1}}
                    transition={{duration: 2}}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"/>

                <div className="absolute inset-0 w-full flex flex-col items-center justify-center px-4">
                    {/* Заголовок */}
                    <motion.h1
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
            <div className="bg-white text-gray-900 space-y-24">
                {/* Почему мы важны */}
                <motion.section
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="space-y-8 container mx-auto py-10"
                >
                    <h2 className="text-2xl md:text-4xl text-center">Ответственный сбор техники — первый шаг к защите
                        природы</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Recycle className="size-28 text-lime-600"/>,
                                text: "Старая техника содержит токсичные компоненты. Их нельзя просто выбрасывать — это опасно для почвы и воды."
                            },
                            {
                                icon: <ShieldCheck className="size-28 text-lime-600"/>,
                                text: "Мы работаем с сертифицированными переработчиками. Каждое устройство проходит безопасную утилизацию."
                            },
                            {
                                icon: <Truck className="size-28 text-lime-600"/>,
                                text: "У нас своя команда и техника. Мы не перекладываем задачи — мы решаем их сами и быстро."
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-4 bg-yellow-50 p-6 rounded-2xl shadow-md">
                                {item.icon}
                                <p className="text-gray-700">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    initial={{opacity: 0, scale: 0.95}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
                    className="relative py-10 md:h-screen bg-center bg-no-repeat bg-cover bg-fixed flex flex-col items-center justify-center"
                    style={{backgroundImage: "url(/aboutUs_2.jpeg)"}}
                >
                    {/* Затемнение слоя */}
                    <div className="absolute inset-0 bg-black/50 z-0"/>

                    {/* Контент поверх затемнения */}
                    <div className="relative z-10 space-y-8 px-4 text-white">
                        <h2 className="text-2xl md:text-4xl text-center">Как это работает</h2>
                        <div className="container mx-auto grid md:grid-cols-4 gap-6 text-center rounded-xl">
                            {[
                                ["📞", "Оформление заявки", "Оставьте заявку на сайте или позвоните нам."],
                                ["📅", "Согласование", "Мы перезваниваем и уточняем удобное время."],
                                ["🚛", "Вывоз", "Приезжаем, аккуратно выносим технику, грузим в машину."],
                                ["🌱", "Ответственный подход", "Каждый этап контролируется, чтобы техника не навредила экологии."],
                            ].map(([emoji, title, desc], i) => (
                                <div
                                    key={i}
                                    className="p-6 bg-white/90 border border-gray-200 rounded-xl shadow hover:shadow-lg transition text-gray-800"
                                >
                                    <div className="text-5xl mb-3">{emoji}</div>
                                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                    <p className="text-gray-600">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{opacity: 0, x: 30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.8}}
                    className="space-y-10 px-4 md:py-16 bg-gray-50"
                >
                    <h2 className="text-2xl md:text-4xl text-center">
                        Наши ценности
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            {
                                icon: <ShieldCheck className="size-12 text-lime-600"/>,
                                title: "Ответственность",
                                desc: "Мы работаем официально и честно, без скрытых условий.",
                            },
                            {
                                icon: <Timer className="size-12 text-lime-600"/>,
                                title: "Скорость",
                                desc: "Приедем в день обращения или на следующий — без промедлений.",
                            },
                            {
                                icon: <Sparkles className="size-12 text-lime-600"/>,
                                title: "Чистота",
                                desc: "После нас не остаётся ни пыли, ни следов.",
                            },
                            {
                                icon: <Leaf className="size-12 text-lime-600"/>,
                                title: "Экология",
                                desc: "Каждое устройство — это вторсырьё, а не мусор.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-8 p-6 bg-white rounded-2xl shadow hover:shadow-md transition"
                            >
                                {item.icon}
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center space-y-4 bg-gray-700 py-20"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white">Готовы освободить пространство?</h2>
                    <p className="text-white text-lg mb-10">Заполните заявку — и мы приедем, когда вам удобно.</p>
                    <Button
                        size="lg"
                        className="bg-yellow-600 mx-auto hover:bg-lime-600 transition text-white px-6 py-3 rounded-xl shadow-lg"
                    >
                        <PhoneCall className="mr-2 w-5 h-5"/>
                        Оставить заявку
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
