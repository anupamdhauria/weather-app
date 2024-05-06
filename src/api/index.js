const baseURL="http://api.weatherapi.com/v1/current.json?key=292b2461ffb64c36ad1180617240405"
export const getWeatherDataForCity=async(city)=>{
    const responce=await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await responce.json();
};

export const getWeatherDataForLocation=async(latitude,longitude)=>{
    const responce=await fetch(`${baseURL}&q=${latitude},${longitude},&aqi=yes`);
    return await responce.json();
};