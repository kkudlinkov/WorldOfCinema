import React, {useState} from 'react';
import "./Navbar.css";
import Menu from "../Menu/Menu";

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
                        <li><a href="./main" className="nav_link">Домой</a></li>
                        <li><a href="() => false" className="nav_link">Подписки</a></li>
                        <li><a href="() => false" className="nav_link">О нас</a></li>
                        <li><a href="() => false" className="nav_link">Обратная связь</a></li>
                    </ul>

                    <div className="header_input">
                        <input type="text" placeholder='Найти...' />
                    </div>

                    <div className="header_profile">
                        <div className="search">
                            <img src={require('../../media/NavbarImgs/search.png')} alt="search" />
                        </div>


                        <div className="profile">
                            <a className='profile_block' href="./authentication"><img src={require('../../media/NavbarImgs/profile.png')} alt="profile" /> <span>Войти</span></a>
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