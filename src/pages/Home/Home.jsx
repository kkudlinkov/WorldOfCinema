import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <div className="home">
                <div className="home__inner">
                    <h1 className="home__title">Добро пожаловать на CinemaWorld, пользователь!</h1>
                    <p className="home__intro">Это ознакомительный проект в котором ты сможешь найти все нужные тебе
                        фильмы и узнать любую информацию по ним.
                        <br/>Так что не теряй времени и присутпай скорее!</p>
                    <Link className="buttonLink" to="./catalog">
                        <button className="buttonStart"> Начать!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;