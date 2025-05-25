import { useEffect, useState } from "react";
import { testimonials } from "../../store/data.js";
import { FaUserCircle } from "react-icons/fa";

export default function TestimonialsSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [index]);

    const testimonial = testimonials[index];

    return (
        <div className="bg-gray-100 min-h-[70vh] flex items-center">
            <div className="max-w-6xl mx-auto text-center py-20 px-6">
                <div className="flex flex-col items-center">
                    {testimonial.img ? (
                        <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="w-28 h-28 rounded-full object-cover shadow-lg mb-3"
                            onError={(e) => (e.target.style.display = "none")}
                            aria-hidden="true"
                        />
                    ) : (
                        <FaUserCircle className="w-28 h-28 text-gray-400" aria-hidden="true" />
                    )}
                    <h5 className="text-3xl font-bold mb-1">{testimonial.name}</h5>
                    <div className="flex items-center justify-center mt-3 mb-6 text-yellow-400 text-3xl">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                            <span key={i}>★</span>
                        ))}
                    </div>

                    <p className="italic text-gray-800 text-xl max-w-4xl">{testimonial.review}</p>
                </div>

                <div className="flex justify-center mt-8 space-x-3">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                i === index ? "bg-gray-500 scale-150" : "bg-gray-400"
                            }`}
                            aria-label={`Switch to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

