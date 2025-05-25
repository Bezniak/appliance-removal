import React from 'react'

export const AnyQuestions = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/anyQuestionsBg.jpg')" }}
        >
            {/* Градиентный overlay поверх изображения */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60 z-0" />

            {/* Контент */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div className="max-w-3xl text-center animate-fade-in-up">
                    <h1 className="text-4xl leading-16 md:text-5xl font-bold text-white drop-shadow-md mb-4">
                        ОСТАЛИСЬ ВОПРОСЫ? ПОЗВОНИТЕ НАМ!
                    </h1>
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 rounded-full shadow-md"></div>
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-8 drop-shadow-sm">
                        Бесплатно и быстро вывезем ненужную бытовую технику по Минску.
                        Освободите место в доме уже сегодня — мы сами всё вынесем и погрузим.
                    </p>
                    <a
                        href="tel:+375297621847"
                        className="inline-block text-4xl md:text-5xl font-extrabold text-yellow-400 hover:text-lime-500 drop-shadow-lg transition-colors duration-300 select-none"
                    >
                        +375 29 762 18 47
                    </a>
                </div>
            </div>
        </div>
    )
}
