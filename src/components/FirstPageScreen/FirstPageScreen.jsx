import React from 'react'
import { motion } from "framer-motion";

export const FirstPageScreen = ({ title, description, img }) => {
    return (
        <section
            className="relative h-screen md:h-[80vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center"
            aria-label={title} // семантическое описание секции
        >
            <motion.img
                src={img}
                alt={title} // динамический alt из title
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.5, transformOrigin: 'center' }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                role="img"
                aria-hidden="false"
            />

            <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"
                aria-hidden="true"
            />

            <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col items-center justify-center px-4 text-center">
                <motion.h1
                    className="z-10 text-white text-4xl md:text-5xl mb-10 px-6 tracking-tight drop-shadow-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="z-10 mt-4 text-white text-lg md:text-xl max-w-3xl px-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                >
                    {description}
                </motion.p>
            </div>
        </section>
    )
}
