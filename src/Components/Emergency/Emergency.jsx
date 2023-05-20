import React from 'react';
import s from './emergency.module.scss'
import {Link} from "react-router-dom";
import Arrow from "../../UI/Arrow.jsx";

const Emergency = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <h2 className={s.title}>СРОЧНО</h2>
                <p className={s.text}>Спасли людей из пожара на пятерке</p>
                <Link to={'/'}>
                    <Arrow/>
                </Link>
            </div>
        </div>
    );
};

export default Emergency;