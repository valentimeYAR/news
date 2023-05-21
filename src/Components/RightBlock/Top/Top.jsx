import React from 'react';
import s from './top.module.scss'
import Item from "./Item/Item.jsx";
import {useTop} from "../../../store/RightBlock/Top/store.js";

const Top = () => {
    const {news} = useTop(state => state)
    return (
        <div className={s.container}>
            <h2 className={s.title}>ТОП 5</h2>
            <div className={s.items}>
                {news.map(el => <Item title={el.title} commentsCount={el.commentsCount}
                                      viewsCount={el.viewsCount} id={el.id}/>)}
            </div>
        </div>
    );
};

export default Top;