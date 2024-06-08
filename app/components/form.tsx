'use client';

import Image from "next/image";
import styleForm from "../styles/form.module.css";
import styleTitle from "../styles/title.module.css"
import { useForm } from "react-hook-form";

// типы данных формы
interface IFormInput {
    name: string,
    email: string,
    tel: string,
    message: string,
    check: boolean
}

// форма обратной связи
export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()

    // отправка данных формы
    async function submitForm(data: object) {
        try {
            const response = await fetch("https://api.test.cyberia.studio/api/v1/feedbacks", {
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
                method: "POST"
            })
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            alert('Сообщение отправлено!');
        } catch (err) {
            console.error(err);
            alert("Что-то пошло не так...");
        }
    }

    return (
        <>
            <p className={styleTitle.title_text}>
                <span className={styleTitle.title_container}>
                    <Image
                        src="/form-image.svg"
                        alt="Form image"
                        className={styleForm.form_image}
                        width={80}
                        height={80}
                        priority
                    />
                    <span>Расскажите о вашем проекте:</span>
                </span>

            </p>
            <form onSubmit={handleSubmit(submitForm)} className={styleForm.form_container}>
                <div className={styleForm.form_container_inner}>
                    <div className={styleForm.form_item}>
                        <label className={styleForm.form_label} htmlFor="name_input">Имя</label>
                        <input
                            className={styleForm.form_input}
                            type="text"
                            id="name_input"
                            autoComplete="name"
                            {...register("name", {
                                required: true,
                                maxLength: 100
                            })}
                        ></input>
                        {errors.name && errors.name.type == "required" &&
                            <p className={styleForm.validation_error}>Имя должно быть заполнено!</p>}
                        {errors.name && errors.name.type == "maxLength" &&
                            <p className={styleForm.validation_error}>Имя слишком длинное!</p>}
                    </div>
                    <div className={styleForm.form_item}>
                        <label className={styleForm.form_label} htmlFor="email_input">Email</label>
                        <input
                            className={styleForm.form_input}
                            type="email"
                            id="email_input"
                            autoComplete="email"
                            required={true}
                            {...register("email", {
                                required: true,
                                pattern: /^\S+@\S+$/i
                            })}
                        ></input>
                        {errors.email && errors.email.type == "required" &&
                            <p className={styleForm.validation_error}>Email должен быть заполнен!</p>}
                        {errors.email && errors.email.type == "pattern" &&
                            <p className={styleForm.validation_error}>Введен некорректный email!</p>}
                    </div>
                    <div className={styleForm.form_item}>
                        <label className={styleForm.form_label} htmlFor="tel_input">Телефон</label>
                        <input
                            className={styleForm.form_input}
                            type="tel"
                            id="tel_input"
                            autoComplete="tel"
                            {...register("tel", {
                                required: true,
                                maxLength: 12,
                                minLength: 6
                            })}
                        ></input>
                        {errors.tel && errors.tel.type == "required" &&
                            <p className={styleForm.validation_error}>Телефон должен быть заполнен!</p>}
                        {errors.tel && errors.tel.type == "minLength" &&
                            <p className={styleForm.validation_error}>Введен слишком короткий номер!</p>}
                        {errors.tel && errors.tel.type == "maxLength" &&
                            <p className={styleForm.validation_error}>Введен слишком длинный номер!</p>}
                    </div>
                </div>
                <div className={styleForm.form_item}>
                    <label className={styleForm.form_label} htmlFor="message_input">Сообщение</label>
                    <textarea
                        id="message_input"
                        className={styleForm.form_input}
                        {...register("message", {
                            required: true
                        })}
                    ></textarea>
                    {errors.message && errors.message.type == "required" &&
                        <p className={styleForm.validation_error}>Введите сообщение!</p>}
                </div>
                <div className={styleForm.form_item}>
                    <div className={styleForm.form_check_container}>
                        <label className={styleForm.form_label} htmlFor="check_input">Согласие на обработку персональных данных</label>
                        <input
                            className={styleForm.form_input}
                            type="checkbox"
                            id="check_input"
                            {...register("check", {
                                required: true
                            })}
                        ></input>
                    </div>
                    {errors.check && errors.check.type == "required" &&
                        <p className={styleForm.validation_error}>Необходимо подтвердить согласие на обработку персональных данных!</p>}
                </div>
                <div className={styleForm.form_button}>
                    <button type="submit" className={styleForm.form_button_input}>Отправить</button>
                </div>
            </form>
        </>
    )
}