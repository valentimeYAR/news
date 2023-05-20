import React, {useEffect} from 'react';
import s from './weather.module.scss'
import {useWeather} from "../../../store/Weather/store.js";

const Weather = () => {
    const { getWeather, temperature } = useWeather();
    const getTemperature = async () =>{
        await getWeather()
    }
    useEffect(() => {
        getTemperature()
    }, [])
    return (
        <div className={s.container}>
            <div className={s.image}>Облако</div>
            <div className={s.weather}>
                <p>Сейчас</p>
                <p>{temperature[0]}</p>
            </div>
        </div>
    );
};

export default Weather;