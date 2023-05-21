import React from 'react';
import s from './generalNews.module.scss'
import Eye from "../../../UI/Eye.jsx";
import Comments from "../../../UI/Comments.jsx";

const GeneralNews = ({img, imgTitle, title, viewsCount, commentsCount}) => {
    return (
        <div className={s.container}>
            <div className={s.imageBlock}>
                <img alt={'img'} src={img}/>
                <h2 className={s.imageTitle}>{imgTitle}</h2>
            </div>
            <div className={s.infoBlock}>
                <h2 className={s.title}>{title}</h2>
                <div className={s.statistics}>
                    <div className={s.statisticBlock}>
                        <Eye/>
                        <p className={s.quantity}>{viewsCount}</p>
                    </div>
                    <div className={s.statisticBlock}>
                        <Comments/>
                        <p className={s.quantity}>{commentsCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralNews;