import React,{useState, useEffect} from "react";


const API_CITIESWEATHER = "http://localhost:8888/weather-service/weathers?cityName=" 
// Stateless component


function CurrentWeather(props){

  const [isError, setIsError] = useState(false);

  const { cityName } = props.match.params;
  const [wm , setWm] = useState(0);
  const [wd , setWd] = useState(0);
  const [mt , setMt] = useState(0);
  console.log(cityName);
  

  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      try{
      const response = await fetch(API_CITIESWEATHER+cityName);
      const data = await response.json();
      const item1 = data.weather[0].main;
      const item2 = data.weather[0].description;
      const item3 = data.main.temp;
      setWm(item1);
      setWd(item2);
      setMt(item3);
      }catch(error){
        setIsError(true);
      }

    }
    
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return(

    <div>
        <h1>City : {cityName}</h1>
        <h1>WeatherMain : {wm}</h1>
        <h1>WeatherDescription : {wd}</h1>
        <h1>MainTemp : {mt}</h1>
        <p>City list</p>
        
      </div>
  );
};
export default CurrentWeather;






