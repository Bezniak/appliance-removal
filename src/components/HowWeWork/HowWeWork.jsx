import {Button} from 'flowbite-react';
import {HiPhone} from 'react-icons/hi';

const steps = [
    {emoji: '📞', text: 'Свяжитесь с нами любым удобным способом — звонок, мессенджер или онлайн-заявка'},
    {emoji: '📅', text: 'Согласуем удобное время и уточним детали выезда'},
    {emoji: '🚚', text: 'Профессиональная команда приедет точно в назначенное время'},
    {emoji: '📦', text: 'Аккуратно и безопасно погрузим всю технику'},
    {emoji: '♻️', text: 'Организуем экологичную утилизацию или переработку техники'},
    {emoji: '🎁', text: 'Услуга полностью бесплатна — никаких скрытых платежей'},
];

export default function HowWeWork({title}) {

    return (
        <section className="bg-white px-0 py-10 md:py-20">
            <div className="container mx-auto grid md:grid-cols-2 gap-0 md:gap-16 items-center">
                <div className="flex flex-col justify-center space-y-10 px-6">
                    <div>
                        {title ? (
                            <h2 className="text-center md:text-left text-2xl md:text-3xl text-gray-900 leading-tight">{title}</h2>
                        ) : (
                            <h2 className="text-4xl sm:text-5xl text-gray-900 leading-tight">
                                Бесплатный вывоз <span className="text-yellow-500">любых видов техники</span> в Минске
                            </h2>
                        )}
                        <div
                            className="mt-4 mb-10 w-1/2 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full shadow-md"></div>
                        <p className="text-lg text-gray-600 max-w-lg tracking-wide">
                            Мы оперативно и бесплатно вывозим всю бытовую и офисную технику — от старых компьютеров и
                            принтеров до крупногабаритной электроники. Надежно, быстро и с заботой об окружающей среде.
                        </p>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                        {steps.map(({emoji, text}, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-6 group cursor-default"
                            >
                                <div
                                    className="flex items-center justify-center p-3 rounded-full text-white text-2xl transform transition-transform duration-300 group-hover:scale-350"
                                    aria-label={`Шаг ${index + 1}`}
                                    role="img"
                                >
                                    {emoji}
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {text}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col md:flex-row items-center gap-8 pt-12">
                        <Button
                            color="blue"
                            className="bg-yellow-500 hover:bg-lime-600 text-white text-base md:text-lg tracking-widest font-semibold uppercase px-5 py-7 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            Оставить заявку
                        </Button>
                        <a className="flex items-center text-yellow-500 hover:text-lime-600 transition text-base md:text-lg font-semibold select-none"
                           href="tel:+375333669979">
                            <HiPhone className="mr-4 text-3xl"/>
                            +375 29 762 18 47
                        </a>
                    </div>
                </div>

                {/* Right side image (desktop only) */}
                <div className="hidden md:flex justify-center">
                    <img
                        src="/man.jpeg"
                        alt="Рабочий указывает на информацию"
                        className="max-w-xl w-full object-contain rounded-3xl"
                    />
                </div>
            </div>
        </section>
    );
}
