import React from 'react';
import s from './weather.module.scss'

const Weather = () => {
    return (
        <div className={s.container}>
            <div className={s.image}>Облако</div>
            <div className={s.weather}>
                <p>Сейчас</p>
                <p>+13</p>
            </div>
        </div>
    );
};

export default Weather;