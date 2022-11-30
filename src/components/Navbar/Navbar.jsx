import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const changeMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="background"></div>
                <div className="header_inner">
                    <div className='header_logo'>
                        <Link to="./">
                            <img src={require('../../media/NavbarImgs/logo.png')} alt="logo"/>
                        </Link>
                    </div>
                    <ul className='nav'>
                        <li><Link to="./main" className="nav_link">Главная</Link></li>
                        <li><Link to="() => false" className="nav_link">Подписки</Link></li>
                        <li><Link to="() => false" className="nav_link">О нас</Link></li>
                        <li><Link to="./feedback" className="nav_link">Обратная связь</Link></li>
                    </ul>

                    <div className="header_profile">
                        <div className="profile">
                            <Link className='profile_block' to="./Authentication"><img
                                src={require('../../media/NavbarImgs/profile.png')} alt="profile"/>
                                <span>Войти</span></Link>
                        </div>

                        <div className="menuMobile" onClick={changeMenu}>
                            <div className="menuBtn">
                                <div className="menuMobileContainer">
                                    <span className={mobileMenu ? "burgerOn" : "burgerOff"}></span>
                                </div>
                            </div>
                            <div className={mobileMenu ? "menuMobileList" : "menuMobileListHidden"}>
                                <li><Link to='./main' className={"desktopLink"}>Главная</Link></li>
                                <li><Link to="() => false" className={"desktopLink"}>Сервисы</Link></li>
                                <li><Link to="./feedback" className={"desktopLink"}>Обратная связь</Link></li>
                                <li><Link to="./Authentication" className={"desktopLink"}>Войти</Link></li>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;