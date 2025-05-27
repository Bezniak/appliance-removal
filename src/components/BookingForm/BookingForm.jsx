import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { services } from "../../store/data.js";
import {FirstPageScreen} from "../FirstPageScreen/FirstPageScreen.jsx";

const serviceOptions = services.map(({ id, title }) => ({
    value: id,
    label: title,
}));

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export default function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: "",
            phone: "",
            selectedServices: [],
        },
    });

    const sendTelegramMessage = async (data) => {
        try {
            const now = new Date();
            const formattedDate = now.toLocaleDateString("ru-RU");
            const formattedTime = now.toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
            });

            // Формируем текст услуги через запятую
            const servicesText = data.selectedServices
                .map((service) => service.label)
                .join(", ");

            const message = encodeURIComponent(
                `📦 Новая заявка с сайта!\n\n` +
                `🕒 Запись оформлена: ${formattedDate} в ${formattedTime}\n\n` +
                `👤 Имя: ${data.name}\n` +
                `📞 Телефон: ${data.phone}\n` +
                `🔧 Услуги: ${servicesText}\n`
            );

            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;

            const response = await fetch(url, { method: "GET" });

            if (!response.ok) throw new Error("Ошибка при отправке сообщения в Telegram");
        } catch (error) {
            throw error;
        }
    };

    const onSubmit = async (data) => {
        setSubmitError("");
        setIsSubmitting(true);

        try {
            await sendTelegramMessage(data);
            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error("Ошибка отправки:", error);
            setSubmitError("Не удалось отправить заявку. Попробуйте позже.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused
                ? 'var(--oringe)'
                : state.selectProps.menuIsOpen
                    ? 'var(--oringe)'
                    : (state.selectProps.error ? '#f87171' : '#d1d5db'), // tailwind border-red-500 or border-gray-300
            boxShadow: state.isFocused ? '0 0 0 2px var(--oringe)' : 'none',
            '&:hover': {
                borderColor: 'var(--oringe)',
            },
            borderRadius: '0.375rem', // rounded-md
            padding: '6px 8px',
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: 'var(--oringe)',
            color: 'white',
            borderRadius: '0.375rem',
            padding: '2px 6px',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            fontWeight: '600',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            cursor: 'pointer',
            borderRadius: '9999px',
            ':hover': {
                backgroundColor: '#dc2626', // red-600
                color: 'white',
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0.375rem',
            boxShadow: '0 4px 6px rgb(0 0 0 / 0.1)',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'var(--oringe)' : 'white',
            color: state.isFocused ? 'white' : 'black',
            cursor: 'pointer',
        }),
    };


    return (
       <div>
           <FirstPageScreen
               title="Забронируйте вывоз техники — быстро и бесплатно"
               description="Оставьте заявку на бесплатный вывоз старой техники в Минске. Мы приедем в удобное время и экологично утилизируем ненужное оборудование."
               img="/book.jpeg"
           />
           <section className="my-10 md:my-20 max-w-xl mx-auto p-10 bg-white rounded-xl shadow-lg border border-gray-200">
               <h2 className="text-4xl font-bold mb-12 text-center text-lime-600">
                   Форма бронирования
               </h2>

               {isSubmitted ? (
                   <div className="mb-4 p-3 bg-green-100 text-green-800 rounded text-center font-semibold">
                       Ваша заявка успешно отправлена!
                   </div>
               ) : (
                   <form onSubmit={handleSubmit(onSubmit)} noValidate>
                       {/* Имя */}
                       <label className="block mb-2  text-gray-700" htmlFor="name">
                           Имя пользователя <span className="text-red-500">*</span>
                       </label>
                       <input
                           id="name"
                           type="text"
                           placeholder="Введите ваше имя"
                           className={`w-full px-4 py-3 rounded-md border transition focus:outline-none focus:ring-2 focus:ring-[var(--oringe)] ${
                               errors.name ? "border-red-500" : "border-gray-300"
                           }`}
                           {...register("name", {
                               required: "Имя обязательно для заполнения",
                               minLength: { value: 2, message: "Минимум 2 символа" },
                           })}
                           disabled={isSubmitting}
                       />
                       {errors.name && (
                           <p className="text-red-600 mt-1 text-sm">{errors.name.message}</p>
                       )}

                       {/* Телефон */}
                       <label
                           className="block mt-6 mb-2  text-gray-700"
                           htmlFor="phone"
                       >
                           Телефон <span className="text-red-500">*</span>
                       </label>
                       <input
                           id="phone"
                           type="tel"
                           placeholder="+375 XX XXX XXXX"
                           className={`w-full px-4 py-3 rounded-md border transition focus:outline-none focus:ring-2 focus:ring-[var(--oringe)] ${
                               errors.phone ? "border-red-500" : "border-gray-300"
                           }`}
                           {...register("phone", {
                               required: "Телефон обязателен",
                               pattern: {
                                   value: /^\+375\s?\d{2}\s?\d{3}\s?\d{4}$/,
                                   message: "Введите телефон в формате +375 XX XXX XXXX",
                               },
                           })}
                           disabled={isSubmitting}
                       />
                       {errors.phone && (
                           <p className="text-red-600 mt-1 text-sm">{errors.phone.message}</p>
                       )}

                       {/* Выбор услуг */}
                       <label
                           className="block mt-6 mb-2  text-gray-700"
                           htmlFor="services"
                       >
                           Выберите услуги (минимум одна) <span className="text-red-500">*</span>
                       </label>
                       <Controller
                           name="selectedServices"
                           control={control}
                           rules={{
                               validate: (value) =>
                                   value && value.length > 0 ? true : "Выберите минимум одну услугу",
                           }}
                           render={({ field }) => (
                               <Select
                                   {...field}
                                   options={serviceOptions}
                                   isMulti
                                   placeholder="Выберите услуги..."
                                   styles={customStyles}
                                   classNamePrefix="react-select"
                                   onChange={(selected) => field.onChange(selected)}
                                   value={field.value}
                                   isDisabled={isSubmitting}
                               />
                           )}
                       />
                       {errors.selectedServices && (
                           <p className="text-red-600 mt-1 text-sm">{errors.selectedServices.message}</p>
                       )}

                       {submitError && (
                           <p className="text-red-600 mt-4 text-center font-semibold">{submitError}</p>
                       )}

                       {/* Кнопка отправки */}
                       <button
                           type="submit"
                           disabled={isSubmitting}
                           className="mt-8 w-full bg-lime-600 hover:bg-[var(--oringe)] transition text-white font-bold uppercase py-4 rounded-lg shadow-lg text-xl tracking-wide active:scale-95 focus:outline-none focus:ring-4 focus:ring-lime-400"
                       >
                           {isSubmitting ? "Отправка..." : "Забронировать"}
                       </button>
                   </form>
               )}
           </section>
       </div>
    );
}
