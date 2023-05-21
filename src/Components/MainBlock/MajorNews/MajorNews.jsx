import React from 'react';
import s from './majorNews.module.scss'
import Eye from "../../../UI/Eye.jsx";
import Comments from "../../../UI/Comments.jsx";
import {useMajorNews} from "../../../store/MainBlock/MajorNews/store.js";

const MajorNews = () => {
    const {news} = useMajorNews(state => state)
    return (
        <div className={s.container}>
            <div className={s.image}>
                <img src={news.image} alt="img"/>
                <h2 className={s.imageTitle}>{news.imageTitle}</h2>
            </div>
            <div className={s.text}>
                <h2 className={s.title}>{news.title}</h2>
                <p className={s.textItem}>{news.subtitle}</p>
            </div>
            <div className={s.statistics}>
                <div className={s.statisticsItem}>
                    <Eye/>
                    <p className={s.quantity}>{news.viewsCount}</p>
                </div>
                <div className={s.statisticsItem}>
                    <Comments/>
                    <p className={s.quantity}>{news.commentsCount}</p>
                </div>
            </div>
        </div>
    );
};

export default MajorNews;