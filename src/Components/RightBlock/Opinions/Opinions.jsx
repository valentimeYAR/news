import React from 'react';
import s from './opinions.module.scss'
import {useOpinions} from "../../../store/RightBlock/Opinions/store.js";
import Item from "./Item/Item.jsx";

const Opinions = () => {
    const {opinions} = useOpinions(state => state)
    return (
        <div className={s.container}>
            <h2 className={s.title}>Мнения</h2>
            <div className={s.items}>
                {opinions.map((el, index) => <Item avatar={el.avatar} viewsCount={el.viewsCount}
                                                   commentsCount={el.commentsCount} text={el.text} name={el.name}
                                                   key={index}/>)}
            </div>
        </div>
    );
};

export default Opinions;