import React, {useState} from 'react';
import "./Navbar.css";
import Menu from "../Menu/Menu";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:"Главная", href:'/main'}, {value:"Подписки", href:'/subscriptions'}, {value:"О нас", href:'/about'}, {value:"Обратная связь", href:'/feedback'}]

    return (
        <div className="header">
            <div className="container">
                <div className="background"></div>
                <div className="header_inner">
                    <div className='header_logo'>
                        <img src={require('../../media/NavbarImgs/logo.png')} alt="logo" />
                    </div>
                    <ul className='nav'>
                        <li><Link to="./" className="nav_link">Домой</Link></li>
                        <li><Link to="() => false" className="nav_link">Подписки</Link></li>
                        <li><Link to="() => false" className="nav_link">О нас</Link></li>
                        <li><Link to="() => false" className="nav_link">Обратная связь</Link></li>
                    </ul>

                    <div className="header_input">
                        <input type="text" placeholder='Найти...' />
                    </div>

                    <div className="header_profile">
                        <div className="search">
                            <img src={require('../../media/NavbarImgs/search.png')} alt="search" />
                        </div>


                        <div className="profile">
                            <a className='profile_block' href="./Authentication"><img src={require('../../media/NavbarImgs/profile.png')} alt="profile" /> <span>Войти</span></a>
                        </div>

                        <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
                            <div className="burger_btn_fill"></div>
                            <div className="burger_btn_fill"></div>
                            <div className="burger_btn_fill"></div>
                        </div>

                    </div>
                </div>
            </div>
            <Menu active={menuActive} setActive={setMenuActive} header={"CinemaWorld"} items = {items}/>
        </div>
    )
}
export default Navbar;