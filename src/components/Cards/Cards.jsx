import {useState} from "react";
import {services} from "../../store/data.js";
import {NavLink} from "react-router-dom";
import {handleClick} from "../../common/helpers.js";

export function Cards() {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const isAllVisible = visibleCount >= services.length;

    return (
        <section className="bg-gradient-to-r from-green-50 via-white to-green-50" aria-label="Услуги компании">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Заголовок раздела с ключевыми словами */}
                <h2 className="text-4xl mb-4 text-center drop-shadow-md font-semibold">
                    Представляем наши услуги по вывозу техники в Минске
                </h2>

                <div className="mx-auto my-5 w-72 h-1 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full shadow-md"
                     role="presentation"></div>

                {/* Уточнённое описание для ключей */}
                <p className="text-center max-w-5xl mx-auto mb-12 text-lg text-gray-700 leading-relaxed tracking-wide">
                    Ознакомьтесь с полным ассортиментом наших профессиональных услуг по бесплатному вывозу старой
                    техники, утилизации бытовой электроники и экологичной переработке. Мы гарантируем индивидуальный
                    подход, высокий уровень сервиса и заботу о природе.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {services.slice(0, visibleCount).map(({id, title, img, description, href}) => (
                        <article
                            key={id}
                            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-lime-500 cursor-pointer"
                            aria-label={`Услуга: ${title}`}
                            itemScope
                            itemType="https://schema.org/Service"
                        >
                            <div className="relative overflow-hidden h-56">
                                <NavLink to={href} onClick={handleClick} aria-label={`Подробнее об услуге ${title}`}>
                                    <img
                                        src={img}
                                        alt={`Фото услуги: ${title}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        itemProp="image"
                                    />
                                </NavLink>
                            </div>
                            <div className="p-6 text-center">
                                <NavLink
                                    to={href}
                                    onClick={handleClick}
                                    className="text-2xl font-bold mb-3 text-gray-800 flex justify-center items-center gap-3"
                                    itemProp="name"
                                >
                                    {title}
                                </NavLink>
                                <div
                                    className="mx-auto my-5 w-20 h-1 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full shadow-md"
                                    role="presentation"></div>
                                <p className="text-gray-600 text-base leading-relaxed tracking-wide"
                                   itemProp="description">
                                    {description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                {!isAllVisible && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleShowMore}
                            className="bg-lime-600 uppercase hover:bg-yellow-500 text-white font-semibold px-12 py-5 rounded-lg shadow-lg transition-transform cursor-pointer hover:scale-105 active:scale-95"
                            aria-label="Показать все услуги"
                        >
                            Все услуги
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
