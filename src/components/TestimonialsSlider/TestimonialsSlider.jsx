import {useEffect, useState} from "react";
import {testimonials} from "../../store/data.js";
import {FaUserCircle} from "react-icons/fa";

export default function TestimonialsSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]); // зависимость только от длины массива

    const testimonial = testimonials[index];

    return (
        <section
            className="bg-gray-100 min-h-[70vh] flex items-center"
            aria-label="Отзывы клиентов"
        >
            <div className="max-w-6xl mx-auto text-center py-20 px-6">
                <figure className="flex flex-col items-center">
                    {testimonial.img ? (
                        <img
                            src={testimonial.img}
                            alt={`Фото клиента ${testimonial.name}`}
                            className="w-28 h-28 rounded-full object-cover shadow-lg mb-3"
                            onError={(e) => (e.target.style.display = "none")}
                            loading="lazy"
                            width={112}
                            height={112}
                        />
                    ) : (
                        <FaUserCircle
                            className="w-28 h-28 text-gray-400"
                            aria-hidden="true"
                            role="img"
                        />
                    )}

                    <figcaption>
                        <h3 className="text-3xl font-bold mb-1">{testimonial.name}</h3>
                        <div
                            className="flex items-center justify-center gap-5 mt-3 mb-6 text-[var(--oringe)] text-3xl"
                            aria-label={`Рейтинг: ${testimonial.rating} из 5 звезд`}
                            role="img"
                        >
                            {Array.from({length: testimonial.rating}).map((_, i) => (
                                <span key={i} aria-hidden="true">
                  ★
                </span>
                            ))}
                        </div>
                        <blockquote
                            className="italic text-gray-800 text-xl max-w-4xl"
                            aria-live="polite"
                            aria-atomic="true"
                            tabIndex={-1}
                        >
                            {testimonial.review}
                        </blockquote>
                    </figcaption>
                </figure>

                <nav className="flex justify-center mt-8 space-x-3" aria-label="Навигация по отзывам">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === index ? "bg-gray-500 scale-150" : "bg-gray-400"
                            }`}
                            aria-label={`Переключить на отзыв ${i + 1}`}
                            aria-pressed={i === index}
                            type="button"
                            tabIndex={0}
                        />
                    ))}
                </nav>
            </div>
        </section>
    );
}
