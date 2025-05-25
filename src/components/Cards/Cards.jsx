import {useState} from "react";
import {services} from "../../store/data.js";
import {NavLink} from "react-router-dom";
import {handleClick} from "../../common/helpers.js";

export function Cards() {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const isAllVisible = visibleCount >= services.length;

    return (
        <div className='bg-gradient-to-r from-green-50 via-white to-green-50'>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h1 className="text-4xl mb-4 text-center drop-shadow-md">
                    Представляем наши услуги
                </h1>
                <div
                    className="mx-auto my-5 w-72 h-1 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full shadow-md"></div>
                <p className="text-center max-w-5xl mx-auto mb-12 text-lg text-gray-700 leading-relaxed tracking-wide">
                    Ознакомьтесь с ассортиментом наших профессиональных услуг, выполненных с
                    вниманием к деталям и высоким стандартам качества. Мы предлагаем индивидуальный подход
                    и гарантируем результат, который превзойдет ваши ожидания.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {services.slice(0, visibleCount).map(({ id, title, img, description, href }) => (
                        <div
                            key={id}
                            className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-lime-500 cursor-pointer"
                        >
                            <div className="relative overflow-hidden h-56">
                                <NavLink to={href} onClick={handleClick}>
                                    <img
                                        src={img}
                                        alt={title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </NavLink>
                            </div>
                            <div className="p-6 text-center">
                                <NavLink
                                    to={href}
                                    onClick={handleClick}
                                    className="text-2xl font-bold mb-3 text-gray-800 flex justify-center items-center gap-3"
                                >
                                    {title}
                                </NavLink>
                                <div className="mx-auto my-5 w-20 h-1 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full shadow-md"></div>
                                <p className="text-gray-600 text-base leading-relaxed tracking-wide">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
                {!isAllVisible && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleShowMore}
                            className="!bg-lime-600 uppercase hover:bg-yellow-500 text-white font-semibold px-8 !py-4 rounded-lg shadow-lg transition-transform cursor-pointer hover:scale-105 active:scale-95"
                        >
                            Все услуги
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
