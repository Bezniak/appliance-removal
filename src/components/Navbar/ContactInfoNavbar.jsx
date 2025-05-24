import React from 'react'
import {Link} from "react-router-dom";
import {FaLocationPin, FaPhone} from "react-icons/fa6";
import {TbClockHour9Filled} from "react-icons/tb";
import {Button} from "flowbite-react";

export const ContactInfoNavbar = () => {
    return (
        <div className='hidden py-6 !px-12 md:px-8 lg:flex items-center justify-between border-b'>
            <div>
                <Link to="/" className="flex items-center gap-3">
                    <img src="/logo.svg" alt="Логотип" width={52} height={52}/>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='uppercase font-black text-lime-600'>Вывоз</div>
                        <div className='uppercase font-black text-lime-600'>техники</div>
                    </div>
                </Link>
            </div>

            <div className='flex items-center justify-center gap-16 w-1/2'>
                <div className='relative flex flex-col items-center gap-2 text-gray-700'>
                    <FaPhone className="absolute inset-0 h-full w-full text-lime-600 opacity-10"/>
                    Позвоните нам
                    <a
                        href="tel:+375333669979"
                        className="text-lg font-bold text-lime-600 hover:text-yellow-500 transition z-50"
                    >
                        +375 29 762 18 47
                    </a>
                </div>
                <div className="relative flex flex-col items-center gap-2 text-gray-700">
                    <FaLocationPin className="absolute inset-0 h-full w-full text-lime-600 opacity-10"/>
                    <p>Территория обслуживания</p>
                    <p className="text-lg font-bold text-lime-600">г. Минск</p>
                </div>

                <div className='relative flex flex-col items-center gap-2 text-gray-700'>
                    <TbClockHour9Filled className="absolute inset-0 h-full w-full text-lime-600 opacity-10"/>
                    <p>Часы работы</p>
                    <p className="text-lg font-bold text-lime-600">09:00 - 19:00</p>
                </div>
            </div>

            <Button
                className="!bg-lime-600 uppercase hover:bg-yellow-500 text-white font-semibold px-6 !py-7 rounded-lg shadow-lg transition-transform cursor-pointer hover:scale-105 active:scale-95">
                Подать заявку
            </Button>
        </div>
    )
}