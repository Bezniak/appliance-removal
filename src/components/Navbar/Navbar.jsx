import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {services} from "../../store/data.js";
import {ContactInfoNavbar} from "./ContactInfoNavbar.jsx";
import {handleClick} from "../../common/helpers.js";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSitesDropdownOpen, setIsSitesDropdownOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.getElementById('mobile-dropdown');
            const sites = document.getElementById('sites-dropdown');

            if (
                mobileMenu &&
                !mobileMenu.contains(event.target) &&
                !event.target.closest('.mobile-toggle') &&
                isMobileMenuOpen
            ) {
                setIsMobileMenuOpen(false);
            }

            if (
                sites &&
                !sites.contains(event.target) &&
                !event.target.closest('.sites-toggle') &&
                isSitesDropdownOpen
            ) {
                setIsSitesDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen, isSitesDropdownOpen]);

    return (
        <header>
            <ContactInfoNavbar/>
            <nav aria-label="Основное меню" className="border-gray-200 w-full">
                <div className="mx-auto flex flex-wrap items-center justify-center py-7">
                    <div className="flex justify-between items-center w-full">

                        {/* Логотип (ссылка на главную) */}
                        <NavLink
                            to={ROUTES.HOME}
                            className="md:hidden pl-3 flex flex-col items-center justify-center"
                            aria-label="Перейти на главную страницу"
                        >
                            <img src="/logo.svg" alt="Логотип компании" width={40} height={40}/>
                        </NavLink>

                        {/* Телефон (только для мобильных) */}
                        <a
                            href="tel:+375333669979"
                            className="md:hidden text-2xl font-bold text-lime-600 hover:text-[var(--oringe)] transition z-50"
                            aria-label="Позвонить по телефону +375 29 762 18 47"
                        >
                            +375 29 762 18 47
                        </a>

                        {/* Кнопка открытия мобильного меню */}
                        <button
                            type="button"
                            className="inline-flex items-center mr-3 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mobile-toggle"
                            aria-controls="mobile-dropdown"
                            aria-expanded={isMobileMenuOpen}
                            aria-label={isMobileMenuOpen ? "Закрыть главное меню" : "Открыть главное меню"}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Toggle main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="gray"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>

                    </div>

                    {/* Мобильное и десктопное меню */}
                    <div
                        id="mobile-dropdown"
                        className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
                    >
                        <ul className="flex flex-col gap-10 mt-10 font-medium md:p-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
                            role="menubar">
                            <li role="none">
                                <NavLink
                                    to={ROUTES.HOME}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        handleClick();
                                    }}
                                    className={({isActive}) =>
                                        `block ml-10 md:p-0 uppercase transition ${
                                            isActive ? 'text-[var(--oringe)] font-bold' : 'text-black hover:text-[var(--oringe)]'
                                        }`
                                    }
                                    aria-current="page"
                                    role="menuitem"
                                >
                                    Главная
                                </NavLink>
                            </li>

                            <li role="none">
                                <NavLink
                                    to={ROUTES.ABOUT_US}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({isActive}) =>
                                        `block ml-10 rounded md:p-0 uppercase transition ${
                                            isActive ? 'text-[var(--oringe)] font-bold' : 'text-black hover:text-[var(--oringe)]'
                                        }`
                                    }
                                    role="menuitem"
                                >
                                    О нас
                                </NavLink>
                            </li>

                            {/* Dropdown для услуг */}
                            <li role="none" className="relative">
                                <button
                                    id="dropdownNavbarLink"
                                    aria-haspopup="true"
                                    aria-expanded={isSitesDropdownOpen}
                                    aria-controls="sites-dropdown"
                                    className="flex items-center ml-10 justify-start gap-3 w-full text-black hover:text-[var(--oringe)] transition md:p-0 md:w-auto sites-toggle uppercase"
                                    onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}
                                    role="menuitem"
                                >
                                    Услуги
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="#5fa500"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                <div
                                    id="sites-dropdown"
                                    className={`z-50 ${isSitesDropdownOpen ? '' : 'hidden'} absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-7 bg-white w-full md:w-[700px] lg:w-[1200px] px-4 md:px-8 py-5`}
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                        {services.map((item) => (
                                            <div key={item.id}>
                                                <NavLink
                                                    to={item.href}
                                                    className="block text-gray-600 hover:text-[var(--oringe)] transition"
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false);
                                                        setIsSitesDropdownOpen(false);
                                                        handleClick();
                                                    }}
                                                >
                                                    {item.title}
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </li>

                            <li role="none">
                                <NavLink
                                    to={ROUTES.CONDITIONS}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({isActive}) =>
                                        `block ml-10 rounded md:p-0 uppercase transition ${
                                            isActive ? 'text-[var(--oringe)] font-bold' : 'text-black hover:text-[var(--oringe)]'
                                        }`
                                    }
                                    role="menuitem"
                                >
                                    Условия вывоза
                                </NavLink>
                            </li>

                            <li role="none">
                                <NavLink
                                    to={ROUTES.CONTACT}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({isActive}) =>
                                        `block ml-10 rounded md:p-0 uppercase transition ${
                                            isActive ? 'text-[var(--oringe)] font-bold' : 'text-black hover:text-[var(--oringe)]'
                                        }`
                                    }
                                    role="menuitem"
                                >
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
