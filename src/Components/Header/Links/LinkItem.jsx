import React from 'react';
import {Link} from "react-router-dom";
import s from './linkItem.module.scss'

const LinkItem = ({href, text}) => {
    return (
        <Link to={href} className={s.link}>
            {text}
        </Link>
    );
};

export default LinkItem;