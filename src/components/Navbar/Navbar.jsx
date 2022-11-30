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
                        <img src={require('../../media/NavbarImgs/logo.png')} alt="logo"/>
                    </div>
                    <ul className='nav'>
                        <li><Link to="./" className="nav_link">Домой</Link></li>
                        <li><Link to="() => false" className="nav_link">Подписки</Link></li>
                        <li><Link to="() => false" className="nav_link">О нас</Link></li>
                        <li><Link to="() => false" className="nav_link">Обратная связь</Link></li>
                    </ul>

                    <div className="header_profile">
                        <div className="profile">
                            <Link className='profile_block' to="./Authentication"><img
                                src={require('../../media/NavbarImgs/profile.png')} alt="profile"/>
                                <span>Войти</span></Link>
                        </div>

                        <div className="menuMobile">
                            <div onClick={changeMenu}>
                                <div className="menuMobileContainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                    </svg>
                                </div>
                            </div>
                            <div className= {mobileMenu ? "menuMobileList" : "menuMobileListHidden"}>
                                <li><Link to='./' className={"desktopLink"}>Главная</Link></li>
                                <li><Link to="() => false" className={"desktopLink"}>Сервисы</Link></li>
                                <li><Link to="() => false" className={"desktopLink"}>Контакты</Link></li>
                                <li><Link to="() => false" className={"desktopLink"}>Войти</Link></li>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;