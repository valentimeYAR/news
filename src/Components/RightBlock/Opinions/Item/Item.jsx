import React from 'react';
import s from './Item.module.scss'
import Eye from "../../../../UI/Eye.jsx";
import Comments from "../../../../UI/Comments.jsx";

const Item = ({avatar, viewsCount, commentsCount, text, name}) => {
    return (
        <div className={s.container}>
            <div className={s.left}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={s.right}>
                <h2 className={s.name}>{name}</h2>
                <p className={s.text}>{text}</p>
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
        </div>
    );
};

export default Item;