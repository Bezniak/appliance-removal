import {handleClick} from "../../common/helpers.js";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";

const Hero = () => {
    return (
        <section
            className="relative md:h-[80vh] bg-cover bg-center bg-fixed"
            style={{backgroundImage: "url('/heroBg.jpg')"}}
            aria-label="Главный баннер - услуга вывоза старой техники в Минске"
        >
            {/* Overlay для затемнения картинки */}
            <div className="absolute inset-0 bg-black/50 z-0" aria-hidden="true"/>

            {/* Контент поверх затемнения */}
            <div className="relative z-10 flex items-center justify-center h-full px-4">
                <div
                    className="relative bg-white/10 backdrop-blur-xs p-10 rounded-md text-center max-w-4xl"
                    role="region"
                    aria-labelledby="hero-title"
                    aria-describedby="hero-desc"
                >
                    <h1
                        id="hero-title"
                        className="text-3xl md:text-5xl text-white mb-4"
                    >
                        Нужно срочно избавиться от старой бытовой техники?
                    </h1>
                    <div
                        className="mt-4 mb-10 w-1/2 h-1 mx-auto bg-gradient-to-r from-yellow-300 to-[var(--oringe)] rounded-full shadow-md"
                        aria-hidden="true"
                    ></div>
                    <p
                        id="hero-desc"
                        className="text-white text-lg md:text-xl mb-8 leading-relaxed"
                    >
                        Бесплатно и быстро вывезем ненужную бытовую технику по Минску.
                        Освободите место в доме уже сегодня — мы сами всё вынесем и погрузим.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                        <NavLink
                            to={ROUTES.BOOKING}
                            className="w-64 bg-[var(--oringe)] hover:bg-lime-600 uppercase tracking-widest text-white font-semibold py-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95 text-center"
                            type="button"
                            aria-label="Заказать вывоз старой техники"
                            onClick={handleClick}
                        >
                            Заказать вывоз
                        </NavLink>

                        <a
                            href="tel:+375333669979"
                            className="w-64 bg-[var(--oringe)] hover:bg-lime-600 text-white font-semibold py-4 rounded-lg shadow-lg transition-transform hover:scale-105 active:scale-95 text-center"
                            type="button"
                            aria-label="Заказать вывоз старой техники"
                            onClick={handleClick}
                        >
                            +375 29 762 18 47
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Hero;
