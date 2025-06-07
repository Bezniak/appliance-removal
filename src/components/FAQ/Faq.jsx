import React, {useRef, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {faqData} from "../../store/data.js";

const Faq = () => {
    const faqRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(null);
    const faqInView = useInView(faqRef, {once: true, margin: '0px 0px -100px 0px'});


    return (
        <div>
            <div
                className="container mx-auto p-5 md:p-0 py-10 md:py-32 flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Блок вопросов */}
                <motion.div
                    ref={faqRef}
                    initial={{opacity: 0, y: 50}}
                    animate={faqInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.8}}
                    className="md:w-1/2 w-full container mx-auto"
                >
                    <h1 className="container text-black text-center md:text-left text-3xl md:text-4xl mx-auto mb-6 leading-tight">
                        Часто задаваемые вопросы
                    </h1>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md">
                                <button
                                    className="w-full text-left px-4 py-3 font-normal text-lg flex justify-between items-center bg-white hover:bg-lime-100 transition"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                >
                                    {item.question}
                                    <motion.span
                                        animate={{rotate: openIndex === index ? 180 : 0}}
                                        transition={{duration: 0.1}}
                                        style={{display: 'inline-block'}}
                                        aria-hidden="true"
                                    >
                                        {openIndex === index ? '−' : '+'}
                                    </motion.span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.p
                                            id={`faq-answer-${index}`}
                                            initial={{height: 0, opacity: 0}}
                                            animate={{height: 'auto', opacity: 1}}
                                            exit={{height: 0, opacity: 0}}
                                            transition={{duration: 0.1}}
                                            className="px-4 py-2 text-gray-700 overflow-hidden"
                                        >
                                            {item.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Блок картинки */}
                <div className="md:w-1/2 w-full flex justify-center overflow-hidden relative h-fit">
                    <img
                        src="/faq.png"
                        alt="FAQ Illustration"
                        className="w-full max-w-full h-auto object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Faq;
