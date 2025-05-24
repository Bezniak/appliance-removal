import React from 'react';

export const Preloader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <img
                src="/preloader.svg"
                alt="preloader"
                className="w-24 h-24 md:w-40 md:h-40 sm:w-28 sm:h-28"
            />
        </div>
    );
};
