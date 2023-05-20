import React from 'react';
import s from './header.module.scss'
import {linksName} from "./Links/LinksName.js";
import LinkItem from "./Links/LinkItem.jsx";
import Logo from "../../UI/Logo.jsx";
import Weather from "./Weather/Weather.jsx";
import Currency from "./Currency/Currency.jsx";
import {Link} from "react-router-dom";
import Search from "../../UI/Search.jsx";
import Bell from "../../UI/Bell.jsx";
import Profile from "../../UI/Profile.jsx";
import BurgerMenu from "../../UI/BurgerMenu.jsx";


const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.menu}>
                    {linksName.map(el => <LinkItem href={'/'} text={el.text} key={el.id}/>)}
                </div>
                <div className={s.info}>
                    <div className={s.logo}>
                        <Logo/>
                    </div>
                    <div className={s.infoBlock}>
                        <div className={s.weather}>
                            <Weather/>
                        </div>
                        <div className={s.currency}>
                            <Currency/>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <Link to={'/'} className={s.button}>
                            <Search/>
                        </Link>
                        <Link to={'/'} className={s.button}>
                            <Bell/>
                        </Link>
                        <Link to={'/'} className={s.button}>
                            <Profile/>
                        </Link>
                        <Link to={'/'} className={s.button}>
                            <BurgerMenu/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;