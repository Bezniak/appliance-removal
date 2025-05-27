import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../config/routes.js';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white text-gray-800 px-4">
            <h1 className="text-[120px] font-bold leading-none tracking-tight text-black animate-pulse">
                404
            </h1>
            <p className="text-xl md:text-2xl text-center mb-8">
                Упс! Такой страницы не существует.
            </p>
            <NavLink
                to={ROUTES.HOME}
                className="inline-block text-lg font-medium border py-3 px-8 rounded-lg hover:bg-[var(--oringe)] hover:text-white transition duration-300 ease-in-out"
            >
                Вернуться на главную
            </NavLink>
        </div>
    );
};

export default NotFound;
