import React from 'react';
import s from './currency.module.scss'

const Currency = () => {
    return (
        <div className={s.container}>
            <p>Доллар</p>
            <p>Евро</p>
        </div>
    );
};

export default Currency;