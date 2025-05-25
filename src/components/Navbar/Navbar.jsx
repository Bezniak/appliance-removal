import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {services} from "../../store/data.js";
import {ContactInfoNavbar} from "./ContactInfoNavbar.jsx";


// Import flag images


export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSitesDropdownOpen, setIsSitesDropdownOpen] = useState(false);


    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.getElementById('mobile-dropdown');
            const sites = document.getElementById('sites-dropdown');

            if (mobileMenu && !mobileMenu.contains(event.target) && !event.target.closest('.mobile-toggle') && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
            if (sites && !sites.contains(event.target) && !event.target.closest('.sites-toggle') && isSitesDropdownOpen) {
                setIsSitesDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMobileMenuOpen, isSitesDropdownOpen]);


    return (
        <div>
            <ContactInfoNavbar/>
            <nav className="border-gray-200 w-full">
                <div className="mx-auto flex flex-wrap items-center justify-center px-4 py-7">
                    <div className='flex justify-between items-center w-full'>

                        <NavLink to={ROUTES.HOME} className="md:hidden flex flex-col items-center justify-center">
                            <img src="/logo.svg" alt="Логотип" width={40}/>
                        </NavLink>

                        <a
                            href="tel:+375333669979"
                            className="md:hidden text-2xl font-bold text-lime-600 hover:text-yellow-500 transition z-50"
                        >
                            +375 29 762 18 47
                        </a>

                        <button data-collapse-toggle="navbar-dropdown" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mobile-toggle"
                                aria-controls="navbar-dropdown" aria-expanded="false"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>


                    </div>

                    <div
                        className={`$ ${isMobileMenuOpen ? 'block' : 'hidden'} w-full  md:block md:w-auto md:bg-transparent xs:bg-black md:dark:bg-transparent xs:dark:bg-gray-900`}
                        id="mobile-dropdown"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <NavLink to={ROUTES.HOME}
                                         onClick={() => setIsMobileMenuOpen(false)}
                                         className="block py-2 px-3 md:p-0 text-black hover:text-yellow-500 transition uppercase"
                                         aria-current="page">
                                    Главная
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={ROUTES.ABOUT_US}
                                         onClick={() => setIsMobileMenuOpen(false)}
                                         className="block py-2 px-3 rounded md:border-0 md:p-0 text-black hover:text-yellow-500 transition uppercase"
                                >
                                    О нас
                                </NavLink>
                            </li>

                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                        className="flex items-center justify-between w-full py-2 px-3 text-black hover:text-yellow-500 transition md:border-0 md:p-0 md:w-auto sites-toggle uppercase"
                                        onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}
                                >
                                    Услуги
                                    <svg
                                        className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="#5fa500" viewBox="0 0 10 6"
                                    >
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                <div
                                    id="sites-dropdown"
                                    className={`z-10 ${isSitesDropdownOpen ? '' : 'hidden'} absolute left-0 right-0 mx-auto mt-2 bg-white rounded-lg shadow-xl max-w-screen-xl px-8 py-6`}
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                                        {services.map((item) => (
                                            <div key={item.id}>
                                                <NavLink
                                                    to={item.href} // или динамический путь, если у тебя есть
                                                    className="block text-gray-800 hover:text-lime-600 transition"
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false);
                                                        setIsSitesDropdownOpen(false);
                                                    }}
                                                >
                                                    {item.title}
                                                </NavLink>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <NavLink to={ROUTES.CONDITIONS}
                                         onClick={() => setIsMobileMenuOpen(false)}
                                         className="block py-2 px-3 rounded md:border-0 md:p-0 text-black hover:text-yellow-500 transition uppercase"
                                >
                                    Условия вывоза
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={ROUTES.CONTACT}
                                         onClick={() => setIsMobileMenuOpen(false)}
                                         className="block py-2 px-3 rounded md:border-0 md:p-0 text-black hover:text-yellow-500 transition uppercase">
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};
