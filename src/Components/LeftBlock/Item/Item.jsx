import React from 'react';
import s from './item.module.scss'
import {Link} from "react-router-dom";

const Item = ({text}) => {

    return (
        <Link to={'/'} className={s.container}>
            {text}
        </Link>
    );
};

export default Item;