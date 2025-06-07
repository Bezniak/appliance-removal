import React from "react";
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import dayjs from "dayjs"; // Импортируем Day.js

const Numbers = () => {
    const {ref, inView} = useInView({triggerOnce: true, threshold: 0.5});

    // Рассчитываем количество лет с момента основания компании с использованием Day.js
    const startDate = dayjs("1993-12-17");
    const currentDate = dayjs();
    const totalYears = currentDate.diff(startDate, "year");

    const stats = [
        {label: 'Вывезено единиц техники', value: 186000},
        {label: 'Довольных клиентов', value: 150000},
        {label: 'Лет надежной работы', value: totalYears},
        {label: 'Заявок принято', value: 150000},
    ];


    return (
        <div className='my-10 md:my-20'>
            <h1 className="container text-black text-center text-3xl md:text-4xl mx-auto mb-6 leading-tight">
                Цифры, которые говорят сами за себя
            </h1>
            <div
                ref={ref}
                className="container mx-auto flex flex-wrap justify-center items-stretch gap-x-8 gap-y-12"
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="relative w-80 h-20 md:h-40 flex items-center justify-center"
                    >
                        {/* Большие числа на фоне */}
                        <span
                            className="text-6xl md:text-7xl font-bold text-gray-800 opacity-10 absolute inset-0 flex items-center justify-center"
                        >
                            {inView ? <CountUp start={0} end={stat.value} duration={3}/> : 0}
                        </span>

                        {/* Текст поверх числа */}
                        <p className="text-center text-lime-600 opacity-80 font-semibold text-base md:text-xl z-10 px-2 leading-snug">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Numbers;
