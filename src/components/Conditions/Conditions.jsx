import React from 'react';
import {CheckCircle} from 'lucide-react';
import {FirstPageScreen} from "../FirstPageScreen/FirstPageScreen.jsx";
import Seo from "../SEO/Seo.jsx";

export const Conditions = () => {
    const conditions = [
        "Вывозим старую, сломанную и ненужную технику — бесплатно.",
        "Обслуживаем все районы Минска и частный сектор.",
        "Выезд возможен в день обращения или на следующий день.",
        "Забираем с любого этажа — даже без лифта.",
        "Работаем аккуратно, пунктуально и без лишних вопросов.",
        "Все работы выполняют вежливые и опытные сотрудники.",
        "Вывозим холодильники, стиральные машины, плиты и другую крупную технику.",
        "Всё просто — вы звоните, мы приезжаем и освобождаем место."
    ];

    return (
        <div>
            <Seo
                title="Условия бесплатного вывоза техники в Минске"
                description="Узнайте условия бесплатного вывоза старой и ненужной техники в Минске. Работаем быстро, аккуратно и без лишних хлопот. Обслуживаем все районы города."
                keywords={[
                    "бесплатный вывоз техники",
                    "утилизация техники Минск",
                    "вывоз холодильника Минск",
                    "вывоз стиральной машины",
                    "бесплатный вывоз крупной бытовой техники"
                ]}
            />

            <FirstPageScreen
                title="Условия бесплатного вывоза техники в Минске"
                description="Узнайте, как быстро и удобно избавиться от ненужной бытовой техники с нашей бесплатной услугой вывоза."
                img="/conditions.png"
            />

            <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <section id="conditions" aria-label="Условия бесплатного вывоза техники в Минске">
                        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                            Почему выбирают наш сервис вывоза техники
                        </h2>
                        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                            {conditions.map((condition, index) => (
                                <li
                                    key={index}
                                    className="flex items-start bg-white shadow-sm p-5 rounded-2xl border border-gray-100"
                                >
                                    <CheckCircle className="text-[var(--oringe)] mt-1 mr-4 w-9 h-9 flex-shrink-0"/>
                                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                        <strong>{condition}</strong>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="contact-cta" className="mt-20 text-center">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                            Готовы освободить место от старой техники?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            Оформите заявку на бесплатный вывоз прямо сейчас.
                        </p>
                        <a
                            href="/#contact"
                            className="inline-block bg-[var(--oringe)] hover:bg-lime-600 tracking-widest uppercase text-white font-semibold py-3 px-8 rounded-xl transition duration-300"
                        >
                            Оставить заявку
                        </a>
                    </section>
                </div>
            </main>
        </div>
    );
};
