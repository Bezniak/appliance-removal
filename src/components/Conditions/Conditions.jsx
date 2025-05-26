import React from 'react';
import { CheckCircle } from 'lucide-react';

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
        <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Заголовок */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Условия бесплатного вывоза техники
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Узнайте, как мы работаем и почему сотрудничество с нами — это удобно, быстро и без затрат.
                    </p>
                </header>

                {/* Список условий */}
                <section>
                    <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                        {conditions.map((condition, index) => (
                            <li key={index} className="flex items-start bg-white shadow-sm p-5 rounded-2xl border border-gray-100">
                                <CheckCircle className="text-yellow-500 mt-1 mr-4 w-6 h-6 flex-shrink-0" />
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">{condition}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Призыв к действию */}
                <div className="mt-16 text-center">
                    <p className="text-xl text-gray-800 mb-6">
                        Готовы освободить место и избавиться от старой техники?
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-xl transition duration-300"
                    >
                        Оставить заявку
                    </a>
                </div>
            </div>
        </main>
    );
};
