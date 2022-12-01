import React, {useState} from 'react';
import "./Genre.css";
import GenreList from "../../components/GenreList/GenreList";

const Genre = () => {
    const [NavState, setNavState] = useState(false);
    const changeGenreList = () => {
        setNavState(!NavState);
    };

    return (
        <div className="container">
            <div className="genre">
                <div className="genre__inner">
                    <div className="genre_navigation">
                        <h1 className="genre__title"> Какие бывают жанры фильмов: описание и что они означают</h1>
                        <div className="navigationBlock">
                            <div className="navigationInner">
                                <p className="navigationTitle">Содержание</p>
                                <svg className={NavState ? "NavigateButtonList" : "NavigateButtonListRotate"}
                                     onClick={(changeGenreList)} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 256 512">
                                    <path
                                        d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"/>
                                </svg>
                            </div>
                            <div className={NavState ? "genreListOpen" : "genreListHidden"}>
                                <ol>
                                    <li className="genreElement"><a href="#1">Боевик</a></li>
                                    <li className="genreElement"><a href="#2">Комедия</a></li>
                                    <li className="genreElement"><a href="#3">Мелодрама</a></li>
                                    <li className="genreElement"><a href="#4">Приключенческий фильм</a></li>
                                    <li className="genreElement"><a href="#5">Вестерн</a></li>
                                    <li className="genreElement"><a href="#6">Хоррор</a></li>
                                    <li className="genreElement"><a href="#7">Триллер</a></li>
                                    <li className="genreElement"><a href="#8">Детектив</a></li>
                                    <li className="genreElement"><a href="#9">Драма</a></li>
                                    <li className="genreElement"><a href="#10">Фантастика</a></li>
                                </ol>
                            </div>
                        </div>

                        <p className="genre_intro">
                            Жанры в любом виде искусства — набор стереотипов, которые помогают отличать одно
                            произведение от другого. Когда в конце XIX века появился кинематограф, другие виды
                            искусства уже имели жанровые системы. Молодому кинематографу, выросшему из театра,
                            предстояло создать свою. <br/><br/>

                            Жанры кинематографа начали развиваться в эпоху немого кино. Совершенствовалась техника,
                            которая позволяла снимать картины длиннее, чем полутораминутные зарисовки братьев
                            Люмьер. А с увеличением хронометража и усложнением сюжета авторы фильмов 1920-х годов
                            начали искать особые для каждой работы художественные приёмы. Они-то и легли в основу
                            известных до сих пор жанров.<br/><br/>

                            С 1928 года каждая студия в Голливуде стала специализироваться на одном жанре. Paramount
                            Pictures выпускала комедии, Metro-Goldwyn-Mayer — мюзиклы, а Universal Pictures
                            прославилась на хоррорах о монстрах. Это систематизировало создание фильмов и помогало
                            продвигать картины на рынке.<br/><br/>

                            И лишь тогда, на заре кинематографа, можно было говорить о чистых жанрах. С развитием
                            самого кино и вкусов публики фильмы редко оставались в рамках одного жанра. Что уж
                            говорить о современном кинематографе. Тем не менее в каждой новой картине существует
                            какие-то основные приёмы и клише, которые и определяют её жанр. А какие жанры бывают и
                            чем отличаются друг от друга, мы сейчас расскажем.<br/>
                        </p>

                        <div className="genre_list">
                            <GenreList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Genre;