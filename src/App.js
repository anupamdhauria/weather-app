import logo from './logo.svg';
import './App.css';
import Card from "./components/card"
import Input from './components/input';
import Button from './components/button';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    weather.fetchWeatherdataByCurrentLocation();
  },[]);
  
  const weather=useWeather();
  return (
    <div className="App">
      <h1>weather Forecast</h1>
      <br/>
      <Input/>
      <Button onClick={weather.fetchData}value="Search"/>
      <br/>
      <br/>
      <Card/>
      <br/>
      <Button onClick={weather.refreashData } value="Refresh" />
      <br/>
    </div>
  );
}

export default App;
