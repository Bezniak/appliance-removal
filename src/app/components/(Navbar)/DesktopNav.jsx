'use client';

import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {services} from "@/data";

// Базовый класс ссылки
const baseLinkClass =
    "relative !text-lg uppercase font-semibold px-3 py-2 rounded-md transition-colors after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-lime-600 after:scale-x-0 after:origin-left after:transition-transform hover:text-lime-600 hover:after:scale-x-100";

// Активная ссылка: зелёный текст + подчёркивание
const activeLinkClass = "text-lime-600 after:scale-x-100";

// Компонент для одного элемента навигации
const NavLinkItem = ({href, children}) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={`${baseLinkClass} ${isActive ? activeLinkClass : "!text-black"}`}
                >
                    {children}
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const DesktopNav = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap items-center gap-10 font-semibold text-black uppercase">
                <NavLinkItem href="/">Главная</NavLinkItem>
                <NavLinkItem href="/about">О нас</NavLinkItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className={baseLinkClass + " hover:cursor-pointer"}>
                        Услуги
                    </NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="p-6 bg-white shadow-xl rounded-lg left-0 min-w-[800px] overflow-y-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                            {services.map((service) => (
                                <NavigationMenuLink asChild key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-lime-50 hover:text-lime-700 transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </NavigationMenuLink>
                            ))}
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavLinkItem href="/terms">Условия вывоза</NavLinkItem>
                <NavLinkItem href="/contact">Контакты</NavLinkItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default DesktopNav;
