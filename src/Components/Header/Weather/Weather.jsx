import React from 'react';
import s from './weather.module.scss'
import WeatherSVG from "../../../UI/WeatherSVG.jsx";

const Weather = () => {
    return (
        <div className={s.container}>
            <div className={s.image}>
                <WeatherSVG/>
            </div>
            <div className={s.weather}>
                <p>Сейчас</p>
                <p>13°C</p>
            </div>
        </div>
    );
};

export default Weather;