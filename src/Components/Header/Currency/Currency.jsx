import React from 'react';
import s from './currency.module.scss'

const Currency = () => {
    return (
        <div className={s.container}>
            <p>USD 79.9 ₽</p>
            <p>EURO 86.28 ₽</p>
        </div>
    );
};

export default Currency;