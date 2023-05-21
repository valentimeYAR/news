import React from 'react';
import s from './item.module.scss'
import Eye from "../../../../UI/Eye.jsx";
import Comments from "../../../../UI/Comments.jsx";

const Item = ({id, title, viewsCount, commentsCount}) => {
    return (
        <div className={s.container} style={id === 5 ? {
            border: 'none',
            padding: '0'
        } : null}>
            <div className={s.left}>
                {id}
            </div>
            <div className={s.right}>
                <h2 className={id === 1 ? s.firstTitle : s.title}>{title}</h2>
                <div className={s.statistics}>
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
        </div>
    );
};

export default Item;