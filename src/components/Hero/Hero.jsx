const Hero = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center bg-fixed"
            style={{backgroundImage: "url('/heroBg.jpg')"}}
        >
            {/* Overlay для затемнения картинки */}
            <div className="absolute inset-0 bg-black/50 z-0"/>

            {/* Контент поверх затемнения */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div
                    className="relative border-4 border-white/30 bg-white/10 backdrop-blur-sm p-10 rounded-md text-center max-w-4xl">
                    <h1 className="text-3xl md:text-5xl text-white mb-4">
                        Нужно срочно избавиться от старой техники?
                    </h1>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                    <p className="text-white text-lg md:text-xl mb-8 leading-relaxed">
                        Бесплатно и быстро вывезем ненужную бытовую технику по Минску.
                        Освободите место в доме уже сегодня — мы сами всё вынесем и погрузим.
                    </p>

                    {/* Кнопка выходит за рамку вниз */}
                    <button
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95"
                    >
                        Заказать вывоз
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
