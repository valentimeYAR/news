import React from 'react';
import s from './Recommendations.module.scss'
import Item from "./Item/Item.jsx";
import {useOpinions} from "../../../store/RightBlock/Opinions/store.js";
import {useRecommended} from "../../../store/RightBlock/Recommendations/store.js";

const Recommendations = () => {
    const {recommended} = useRecommended(state => state)
    return (
        <div className={s.container}>
            <h2 className={s.title}>РЕКОМЕНДУЕМ</h2>
            <img
                src="https://cdn.iportal.ru/preview/news/articles/37187b21188621b618824263c3dd1322072e281f_266_150_c.jpg.webp-portal"
                alt="img" className={s.img}/>
            <div className={s.items}>
                {recommended.map(el => <Item title={el.title} viewsCount={el.viewsCount}
                                             commentsCount={el.commentsCount}/>)}
            </div>
        </div>
    );
};

export default Recommendations;