import React from 'react';
import s from './main.module.scss'
import EmergencyNews from "../../UI/EmergencyNews.jsx";
import {news} from './News/news.js'
import News from "./News/News.jsx";
import Dots from "../../UI/Dots.jsx";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className={s.container}>
            <Link to={'/'}>
                <EmergencyNews>Карантин из-за птичьего гриппа</EmergencyNews>
            </Link>
            {news.map(el => <News text={el.text} key={el.id}/>)}
            <Link to={'/'}>
                <Dots/>
            </Link>
        </div>
    );
};

export default Main;