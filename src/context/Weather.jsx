import {createContext, useContext,useState} from 'react'
import { getWeatherDataForCity } from '../api';
import { getWeatherDataForLocation } from '../api';
const WeatherContext=createContext(null);


export const useWeather=()=>{
    return useContext(WeatherContext);
};




export const WeatherProvider=(props)=>{
    const[data,setData]=useState(null);
    const[searchCity,setSearchCity]=useState("");

    const fetchData=async()=>{
        const reponse=await getWeatherDataForCity(searchCity);
        setData(reponse);
    }

    const resetData=()=>{
        setData(null)
        setSearchCity("")
    }
    const fetchWeatherdataByCurrentLocation=()=>{
        //callback function
        navigator.geolocation.getCurrentPosition((position)=>{
            getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
            ).then(data=>setData(data))

        });
        
       
    };
    return(
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,fetchData,refreashData,fetchWeatherdataByCurrentLocation}}>
            {props.children}
        </WeatherContext.Provider>
    );

};
