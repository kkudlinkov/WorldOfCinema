import React from 'react';
import "./Main.css"
import Film from "../../components/Film/Film";

const Main = () => {

    return (
        <div>
            <div className="container">
                {/*Слайдер*/}
                <div className="main">
                    <aside className="sidebar">
                        <h3 className="sidebar_title">Навигация</h3>

                        <label className="select_title" htmlFor="genre-select">Жанр</label>
                        <select className="select_element" name="pets" id="genre-select">
                            <option value="">--Выберите жанр--</option>
                            <option value="Comedy">Комедия</option>
                            <option value="Triller">Триллер</option>
                            <option value="Dramma">Драмма</option>
                            <option value="Melodrama">Мелодрамма</option>
                            <option value="Action">Боевик</option>
                            <option value="Detective">Детектив</option>
                        </select>

                        <label className="select_title" htmlFor="rating-select">Рейтинг</label>
                        <select className="select_element" name="pets" id="rating-select">
                            <option value="">--Рейтинг фильма--</option>
                            <option value="Higher 9">Выше 9</option>
                            <option value="Higher 8">Выше 8</option>
                            <option value="Higher 7">Выше 7</option>
                            <option value="Higher 6">Выше 6</option>
                        </select>

                        <label className="select_title" htmlFor="years-select">Год фильма</label>
                        <select className="select_element" name="pets" id="years-select">
                            <option value="">--Год фильма--</option>
                            <option value="Newest">Новинки</option>
                            <option value="2000">2000-ые</option>
                            <option value="1990">1990-ые</option>
                            <option value="1980">1980-ые</option>
                        </select>

                        <ul className="format_video">
                            <div className="format_block">
                                <li className="">Фильмы</li>
                            </div>
                            <div className="format_block">
                                <li className="">Сериалы</li>
                            </div>
                            <div className="format_block">
                                <li className="">Мультфилмы</li>
                            </div>
                            <div className="format_block">
                                <li className="video">Зарубежные</li>
                            </div>
                            <div className="format_block">
                                <li className="">Аниме</li>
                            </div>
                        </ul>

                    </aside>

                    <div className="mainbar">
                        <Film/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;