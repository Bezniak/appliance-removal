import {services} from "../../store/data.js";

export function Cards() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-r from-green-50 via-white to-green-50">
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
                {services.map(({id, title, img, description}) => (
                    <div
                        key={id}
                        className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:border-lime-500 cursor-pointer"
                    >
                        <div className="relative overflow-hidden h-56">
                            <img
                                src={img}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />

                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold mb-3 text-gray-800 flex justify-center items-center gap-3">
                                {title}
                            </h3>
                            <div
                                className="mx-auto my-5 w-20 h-1 bg-gradient-to-r from-lime-400 to-lime-600 rounded-full shadow-md"></div>
                            <p className="text-gray-600 text-base leading-relaxed tracking-wide">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
