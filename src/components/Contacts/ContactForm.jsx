import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import dayjs from 'dayjs';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
    } = useForm();

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        setError(null);
        const timestamp = dayjs().format("DD.MM.YYYY HH:mm");
        const message = `📩 Форма обратной связи с сайта\n
👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
📝 Тема: ${data.subject}
💬 Сообщение: ${data.message}
🕒 Дата и время отправки: ${timestamp}`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID, text: message}),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке сообщения в Telegram');
            }

            setSubmitted(true);
            reset();
        } catch (err) {
            setError('Не удалось отправить сообщение. Попробуйте позже.');
            console.error(err);
        }
    };

    return (
        <div>
            <section
                className="bg-gray-50 px-4"
                aria-label="Форма обратной связи для бесплатного вывоза техники"
            >
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10">
                    <h1 className="text-4xl text-center md:text-left mb-10">
                        Форма обратной связи
                    </h1>

                    {submitted ? (
                        <p className="text-[var(--oringe)] text-center text-2xl font-medium">
                            Ваше сообщение успешно отправлено!
                        </p>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Имя*"
                                    className={`w-full p-3 border-2 outline-none rounded-lg ${
                                        errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    {...register('name', {required: 'Укажите полное имя'})}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}

                                <input
                                    type="email"
                                    placeholder="Электронная почта*"
                                    className={`w-full p-3 border-2 outline-none rounded-lg ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    {...register('email', {
                                        required: 'Укажите электронную почту',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Некорректный адрес почты',
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}

                                <input
                                    type="tel"
                                    placeholder="Номер телефона*"
                                    className={`w-full p-3 border-2 outline-none rounded-lg ${
                                        errors.phone ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    {...register('phone', {
                                        required: 'Укажите номер телефона',
                                        pattern: {
                                            value: /^\+?[0-9\s\-()]{7,15}$/,
                                            message: 'Некорректный номер телефона',
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">{errors.phone.message}</p>
                                )}

                                <input
                                    type="text"
                                    placeholder="Тема обращения*"
                                    className={`w-full p-3 border-2 outline-none rounded-lg ${
                                        errors.subject ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    {...register('subject', {required: 'Укажите тему сообщения'})}
                                />
                                {errors.subject && (
                                    <p className="text-red-500 text-sm">{errors.subject.message}</p>
                                )}

                                <textarea
                                    placeholder="Ваше сообщение*"
                                    rows="4"
                                    className={`w-full p-3 border-2 outline-none rounded-lg resize-none ${
                                        errors.message ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    {...register('message', {required: 'Введите сообщение'})}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                                )}

                                {error && (
                                    <p className="text-red-500 text-center text-sm">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-lime-600 uppercase text-white py-3 rounded-lg hover:bg-[var(--oringe)] transition"
                                >
                                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
