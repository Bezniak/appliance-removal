import {Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle} from "flowbite-react";
import {BsFacebook, BsInstagram, BsTelegram} from "react-icons/bs";
import React from "react";
import {ROUTES} from "../../config/routes.js";
import {Link} from "react-router-dom";
import {services} from "../../store/data.js";
import {FaViber} from "react-icons/fa";
import {handleClick} from "../../common/helpers.js";

export const FooterComponent = () => {
    const year = new Date().getFullYear();

    return (
        <Footer className="bg-white border-t-2 border-gray-200" aria-label="Footer section">
            <div className="w-full">
                <div className="grid max-w-7xl mx-auto grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2">
                    <section aria-labelledby="footer-about-company">
                        <FooterTitle id="footer-about-company" title="О КОМПАНИИ"/>
                        <FooterLinkGroup col>
                            <Link
                                to={ROUTES.ABOUT_US}
                                className="hover:text-lime-600 hover:underline transition"
                                aria-label="Перейти на страницу О нас"
                                onClick={handleClick}
                            >
                                О нас
                            </Link>
                            <Link
                                to={ROUTES.CONDITIONS}
                                className="hover:text-lime-600 hover:underline transition"
                                aria-label="Перейти на страницу Условия вывоза"
                                onClick={handleClick}
                            >
                                Условия вывоза
                            </Link>
                            <Link
                                to={ROUTES.CONTACT}
                                className="hover:text-lime-600 hover:underline transition"
                                aria-label="Перейти на страницу Контакты"
                                onClick={handleClick}
                            >
                                Контакты
                            </Link>
                            <Link
                                to={ROUTES.PP}
                                className="hover:text-lime-600 hover:underline transition"
                                aria-label="Перейти на страницу Политика конфиденциальности"
                                onClick={handleClick}
                            >
                                Политика конфиденциальности
                            </Link>
                        </FooterLinkGroup>
                    </section>
                    <section aria-labelledby="footer-services">
                        <FooterTitle id="footer-services" title="Оказываемые услуги"/>
                        <FooterLinkGroup className="grid w-full grid-cols-2 gap-4 md:grid-cols-2">
                            {services?.map(({id, href, title}) => (
                                <FooterLink
                                    key={id}
                                    href={href}
                                    className="hover:text-lime-600 transition"
                                    aria-label={`Услуга: ${title}`}
                                    onClick={handleClick}
                                >
                                    {title}
                                </FooterLink>
                            ))}
                        </FooterLinkGroup>
                    </section>
                </div>

                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright
                        href={ROUTES.PP}
                        by="ВЫВОЗ ТЕХНИКИ™"
                        className="text-white"
                        year={year}
                    />
                    <nav aria-label="Социальные сети" className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon
                            href="https://www.facebook.com/vanja.besnjak/"
                            icon={BsFacebook}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        />
                        <FooterIcon
                            href="https://www.instagram.com/ivan_bezniak/"
                            icon={BsInstagram}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        />
                        <FooterIcon
                            href="viber://chat?number=%2B375297621847"
                            icon={FaViber}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Viber"
                        />
                        <FooterIcon
                            href="https://t.me/utilteh"
                            icon={BsTelegram}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        />
                    </nav>
                </div>

                <div className="bg-gray-700 mx-auto text-center py-8 font-normal">
                    <p className="text-white text-sm">
                        Приложение разработал&nbsp;
                        <a
                            href="https://t.me/ivan_bezniak"
                            rel="noreferrer"
                            target="_blank"
                            className="hover:text-lime-600 transition underline"
                            aria-label="Перейти в Telegram к Ивану Безняку"
                        >
                            Иван Безняк
                        </a>
                    </p>
                    <p className="text-white text-sm">
                        <a
                            href="tel:+375295210417"
                            className="text-white text-sm mt-2 block hover:text-lime-600 transition"
                            aria-label="Позвонить по телефону +375 29 521 04 17"
                        >
                            +375 29 521 04 17
                        </a>
                    </p>
                </div>
            </div>
        </Footer>
    );
};
