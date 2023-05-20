import React from 'react';
import {Link} from "react-router-dom";
import s from './news.module.scss'

const News = ({text}) => {
    return (
        <Link to={'/'} className={s.link}>
            {text}
        </Link>
    );
};

export default News;