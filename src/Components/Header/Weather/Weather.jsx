import React, {useEffect} from 'react';
import s from './weather.module.scss'
import {useWeather} from "../../../store/Weather/store.js";
import WeatherSVG from "../../../UI/WeatherSVG.jsx";
import axios from "axios";
const Weather = () => {
    const { getWeather, temperature } = useWeather();
    const getTemperature = async () =>{
        await getWeather()
    }
    useEffect(() => {
        getTemperature()
    }, [])
    const response = axios.get('http://www.cbr.ru/scripts/XML_daily.asp?date_req=19/05/2023')
    console.log(response)
    return (
        <div className={s.container}>
            <div className={s.image}>
                <WeatherSVG/>
            </div>
            <div className={s.weather}>
                <p>Сейчас</p>
                <p>{temperature[0]}°C</p>
            </div>
        </div>
    );
};

export default Weather;