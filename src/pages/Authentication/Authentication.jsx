import React, {useState} from 'react';
import "./Authentication.css";
import cn from "classnames";

const Authentication = () => {
    const [SignState, setSignState] = useState(false);

    return (
        <div className="container">
            <div className="register_form">
                <div className="register_block">
                    <div className="register">
                        <section className="block__item block-item">
                            <h2 className="block-item__title">У вас уже есть аккаунт?</h2>
                            <button className="block-item__btn signin-btn"
                                    onClick={() => setSignState(!SignState)}>Войти
                            </button>
                        </section>

                        <section className="block__item block-item">
                            <h2 className="block-item__title">У вас нет аккаунта?</h2>
                            <button className="block-item__btn signup-btn"
                                    onClick={() => setSignState(!SignState)}>Зарегестрироваться
                            </button>
                        </section>
                    </div>

                    {/*Блок формы*/}

                    {/*<div className="form-box form-box-left form-box-right">*/}
                    <div className={cn("form-box", {"form-box-right": SignState})}>
                        <div className={cn("authorization", {"authorization_active": !SignState})}>
                            <h2 className="form__title">Ввойдите</h2>
                            <p>
                                <input className="form__input" type="text" placeholder="Логин"/>
                            </p>
                            <p>
                                <input type="password" className="form__input" placeholder="Пароль"/>
                            </p>
                            <p>
                                <button className="form__btn">Войти</button>
                            </p>
                            <p>
                                <a href="() => false" className="form__forgot">Восстановить пароль</a>
                            </p>

                        </div>
                        <div className={cn("registration", {"registration_active": SignState})}>
                            <h2 className="form__title">Регистрация</h2>
                            <p>
                                <input className="form__input" type="text" placeholder="Логин"/>
                            </p>
                            <p>
                                <input className="form__input" type="email" placeholder="Почта"/>
                            </p>
                            <p>
                                <input type="password" className="form__input" placeholder="Пароль"/>
                            </p>
                            <p>
                                <input type="password" className="form__input" placeholder="Повторите пароль"/>
                            </p>
                            <p>
                                <button className="form__btn">Зарегистрироваться</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;