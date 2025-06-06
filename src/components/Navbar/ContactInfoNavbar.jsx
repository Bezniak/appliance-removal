import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {ROUTES} from "../../config/routes.js";

export const ContactInfoNavbar = () => {
    return (
        <nav
            className="hidden py-6 !px-12 md:px-8 lg:flex items-center justify-between border-b border-gray-200"
            aria-label="Контактная информация и навигация"
        >
            {/* Логотип и бренд */}
            <div>
                <Link to="/" className="flex items-center gap-3" aria-label="Главная страница — Вывоз техники">
                    <img src="/logo.svg" alt="бесплатый вывоз техники в минске" width={52} height={52}/>
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-2xl font-black text-lime-600 leading-none select-none">7083.by</span>
                    </div>
                </Link>
            </div>

            {/* Контактная информация */}
            <ul className="flex items-center justify-center gap-16 w-1/2" role="list"
                aria-label="Контактная информация">
                <li className="flex flex-col items-center gap-2 text-gray-700" aria-label="Телефон для звонков">
                    <span>Позвоните нам</span>
                    <a
                        href="tel:+375333669979"
                        className="text-lg font-bold text-lime-600 hover:text-[var(--oringe)] transition z-50"
                        aria-label="Позвонить по номеру +375 29 762 18 47"
                    >
                        +375 29 762 18 47
                    </a>
                </li>
                <li className="flex flex-col items-center gap-2 text-gray-700" aria-label="Территория обслуживания">
                    <span>Территория обслуживания</span>
                    <span className="text-lg font-bold text-lime-600">г. Минск</span>
                </li>
                <li className="flex flex-col items-center gap-2 text-gray-700" aria-label="Часы работы">
                    <span>Часы работы</span>
                    <span className="text-lg font-bold text-lime-600">09:00 - 19:00</span>
                </li>
            </ul>

            {/* Кнопка заявки */}
            <NavLink
                to={ROUTES.BOOKING}
                className="!bg-lime-600 uppercase !hover:bg-[var(--oringe)] text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition-transform cursor-pointer hover:scale-105 active:scale-95"
                aria-label="Подать заявку на вывоз техники"
                type="button"
            >
                Подать заявку
            </NavLink>
        </nav>
    );
};
