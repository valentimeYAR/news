import React from 'react';
import s from './Item.module.scss'
import Eye from "../../../../UI/Eye.jsx";
import Comments from "../../../../UI/Comments.jsx";

const Item = ({title, viewsCount, commentsCount}) => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>{title}</h2>
            <div className={s.statisticBlock}>
                <div className={s.statisticItem}>
                    <Eye/>
                    <p className={s.quantity}>{viewsCount}</p>
                </div>
                <div className={s.statisticItem}>
                    <Comments/>
                    <p className={s.quantity}>{commentsCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Item;