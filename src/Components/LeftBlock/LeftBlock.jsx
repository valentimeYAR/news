import React from 'react';
import s from './rightBlock.module.scss'
import {Link} from "react-router-dom";
import {useItems} from "../../store/RightBlock/store.js";
import Item from "./Item/Item.jsx";

const LeftBlock = () => {
    const {items} = useItems(state => state)

    return (
        <div className={s.container}>
            <Link to={'/'} className={s.link}>Все новости</Link>
            <div className={s.news}>
                {items.map((el, index) => <Item text={el.text} key={index}/>)}
            </div>
        </div>
    );
};

export default LeftBlock;