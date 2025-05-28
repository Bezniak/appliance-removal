import React from 'react'

export const AnyQuestions = () => {
    return (
        <section
            className="relative h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/howWeWork.jpeg')" }}
            aria-label="Вопросы и контактная информация"
            itemScope
            itemType="http://schema.org/LocalBusiness"
        >
            {/* Градиентный overlay поверх изображения */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />

            {/* Контент */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="max-w-3xl text-center animate-fade-in-up">
                    <h1
                        className="text-4xl leading-tight md:text-4xl text-white drop-shadow-md mb-4"
                        itemProp="headline"
                    >
                        ОСТАЛИСЬ ВОПРОСЫ? ПОЗВОНИТЕ НАМ!
                    </h1>
                    <div
                        className="w-64 h-1 bg-[var(--oringe)] mx-auto mb-6 rounded-full shadow-md"
                        aria-hidden="true"
                    ></div>
                    <p
                        className="text-white text-lg md:text-xl leading-relaxed mb-8 drop-shadow-sm"
                        itemProp="description"
                    >
                        Бесплатно и быстро вывезем ненужную бытовую технику по Минску.
                        Освободите место в доме уже сегодня — мы сами всё вынесем и погрузим.
                    </p>
                    <a
                        href="tel:+375297621847"
                        aria-label="Позвонить по номеру +375 29 762 18 47"
                        className="inline-block bg-[var(--oringe)] py-3 px-8 rounded-lg text-white text-2xl hover:bg-lime-600 transition"
                        itemProp="telephone"
                    >
                        +375 29 762 18 47
                    </a>
                </div>
            </div>

            {/* SEO: Скрытый дублирующий текст для поисковиков */}
            <span className="sr-only">
                Бесплатный и быстрый вывоз бытовой техники по Минску. Звоните +375 29 762 18 47.
            </span>
        </section>
    )
}
