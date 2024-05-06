import React from 'react'
import { useWeather } from '../context/Weather';
const Card=()=>{
    const weather=useWeather();
    return(
        <div className='card'>
            <img src={weather.data?.current?.condition?.icon}/>
            <h3>{weather.data?.current?.condition?.text}</h3>
            <h2>{weather.data?.current?.temp_c}<span>&#176;</span>C</h2>
            <h3>Cloud:{" "}{weather.data?.current?.cloud} %</h3>
            <h4>Humidity: {" "}{weather.data?.current?.humidity}%</h4>
            <h4>Wind:{" "}{weather.data?.current?.wind_kph}km/h</h4>
            <h4>Feels Like:{" "}{weather.data?.current?.feelslike_c}<span>&#176;</span>C</h4>
            <h5>{weather.data?.location?.name}{" ,"}
                {weather.data?.location?.region}{","}
            {weather.data?.location?.country}</h5>
        </div>
    );
};
export default Card;
