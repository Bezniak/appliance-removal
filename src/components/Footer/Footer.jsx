import {Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle} from "flowbite-react";
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTelegram, BsTwitter} from "react-icons/bs";
import React from "react";
import {ROUTES} from "../../config/routes.js";
import {Link} from "react-router-dom";
import {services} from "../../store/data.js";
import {FaViber} from "react-icons/fa";

export const FooterComponent = () => {

    const year = new Date().getFullYear()

    return (
        <Footer className='bg-white'>
            <div className="w-full">
                <div className="grid max-w-7xl mx-auto grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 ">
                    <div>
                        <FooterTitle title="О КОМПАНИИ"/>
                        <FooterLinkGroup col>
                            <Link to={ROUTES.ABOUT_US} className='hover:text-lime-600 hover:underline transition'>О
                                нас</Link>
                            <Link to={ROUTES.CONDITIONS} className='hover:text-lime-600 hover:underline transition'>Условия
                                вывоза</Link>
                            <Link to={ROUTES.CONTACT}
                                  className='hover:text-lime-600 hover:underline transition'>Контакты</Link>
                            <Link to={ROUTES.PP} className='hover:text-lime-600 hover:underline transition'>Политика
                                конфиденциальности</Link>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Оказываемые услуги"/>
                        <FooterLinkGroup className="grid w-full grid-cols-2 gap-4 md:grid-cols-2">
                            {services?.map((service) => (
                                <FooterLink key={service.id} href={service.href}
                                            className='hover:text-lime-600 transition'>{service.title}</FooterLink>
                            ))}
                        </FooterLinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="#" by="ВЫВОЗ ТЕХНИКИ™" className='text-white' year={year}/>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <FooterIcon
                            href="https://www.facebook.com/vanja.besnjak/"
                            icon={BsFacebook}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <FooterIcon
                            href="https://www.instagram.com/ivan_bezniak/"
                            icon={BsInstagram}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <FooterIcon
                            href="viber://chat?number=%2B375297621847"
                            icon={FaViber}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                        <FooterIcon
                            href="https://t.me/utilteh"
                            icon={BsTelegram}
                            className="text-white hover:text-lime-600 transition text-4xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>
                <div className="bg-gray-700 mx-auto text-center py-8 font-normal">
                    <p className="text-white text-sm">
                        Приложение разработал&nbsp;
                        <a
                            href="https://t.me/ivan_bezniak"
                            rel="noreferrer"
                            target="_blank"
                            className="hover:text-lime-600 transition underline"
                        >
                            Иван Безняк
                        </a>
                    </p>
                    <p className="text-white text-sm">
                        <a
                            href="tel:+375295210417"
                            className="text-white text-sm mt-2 block hover:text-lime-600 transition"
                        >
                            +375 29 521 04 17
                        </a>
                    </p>
                </div>
            </div>
        </Footer>
    )
}
