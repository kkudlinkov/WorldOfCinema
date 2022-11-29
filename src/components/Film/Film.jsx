import React from 'react';
import "./Film.css"
import FilmCard from "../FilmCard/FilmCard";


const Film = () => {
    let film = [
        {
            "name": "Остров проклятых",
            "photo": "CorrupIsland_FilmPoster.webp",
            "genre": [
                "Триллер",
                "Детектив",
                "Драма",
            ],
        },
        {
            "name": "Я легенда",
            "photo": "ImLegend_FilmPoster.webp",
            "genre": [
                "Фантастика",
                "Боевик",
                "Триллер",
                "Драма"
            ],
        },
        {
            "name": "Достать ножи",
            "photo": "KnivesOut_FilmPoster.webp",
            "genre": [
                "Детектив",
                "Комедия",
                "Драма",
                "Преступление"
            ],
        },
        {
            "name": "1+1",
            "photo": "OnePlusOne_FilmPoster.webp",
            "genre": [
                "Драма",
                "Комедия",
                "Биография"
            ],
        },
        {
            "name": "Зелёная книга",
            "photo": "GreenBook_FilmPoster.webp",
            "genre": [
                "Биография",
                "Комедия",
                "Драма"
            ],
        },
        {
            "name": "Лучшее предложение",
            "photo": "BestDeal_FilmPoster.webp",
            "genre": [
                "Триллер",
                "Драма",
                "Преступление"
            ],
        },
        {
            "name": "Марсианин",
            "photo": "Marsianin_FilmPoster.webp",
            "genre": [
                "Приключение",
                "Фантастика",
            ],
        },
        {
            "name": "Звёздные войны: Эпизод 3 — Месть ситхов",
            "photo": "StarWars3_FilmPoster.webp",
            "genre": [
                "Приключение",
                "Фантастика",
            ],
        }
    ]


    return (
        <div>
            <div className="mainContainer">
                <div className="FilmsSection">
                    {film.map((member, index) =>
                        <FilmCard key = {index} member = {member}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Film;