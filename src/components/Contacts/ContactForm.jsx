import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isSubmitSuccessful },
        reset,
    } = useForm();

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log('Форма отправлена:', data);
        setSubmitted(true);
        reset();
        // Здесь можно отправить данные на сервер
    };

    return (
        <div className="bg-white shadow-lg rounded-2xl">
            {submitted ? (
                <p className="text-green-600 text-center text-lg font-medium">
                    Ваше сообщение успешно отправлено!
                </p>
            ) : (
                <>
                    <h3 className="text-4xl mb-5">Форма обратной связи</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Имя*"
                            className={`w-full p-3 border-2 outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                            {...register('name', { required: 'Укажите полное имя' })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                        <input
                            type="email"
                            placeholder="Электронная почта*"
                            className={`w-full p-3 border-2 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                            {...register('email', {
                                required: 'Укажите электронную почту',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Некорректный адрес почты',
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                        <input
                            type="tel"
                            placeholder="Номер телефона*"
                            className={`w-full p-3 border-2 outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                            {...register('phone', {
                                required: 'Укажите номер телефона',
                                pattern: {
                                    value: /^\+?[0-9\s\-()]{7,15}$/,
                                    message: 'Некорректный номер телефона',
                                },
                            })}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

                        <input
                            type="text"
                            placeholder="Тема обращения*"
                            className={`w-full p-3 border-2 outline-none ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                            {...register('subject', { required: 'Укажите тему сообщения' })}
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}

                        <textarea
                            placeholder="Ваше сообщение*"
                            rows="4"
                            className={`w-full p-3 border-2 outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg resize-none`}
                            {...register('message', { required: 'Введите сообщение' })}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-lime-600  uppercase text-white py-3 rounded-lg hover:bg-yellow-600 transition"
                        >
                            {isSubmitting ? 'Отправка...' : 'Отправить'}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactForm;
