import React from 'react'
import '../styles/Weather.css'
import { useState, useEffect } from "react";


const Weather = () => {
    const [location, setLocation] = useState('');
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const [weatherLoading, setWeatherLoading] = useState(true);
    const [weatherData, setWeatherData] = useState([]);


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            setLocation("Geolocation is not supported by this browser.");
          }
      };

      const showPosition = (position) => {
        setLocation("Latitude: " + position.coords.latitude + " and Longitude: " + position.coords.longitude);
        setLongitude(position.coords.longitude)
        setLatitude(position.coords.latitude)
      };

    //   const fetchWeather = async () => {
    //     const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=${latitude}&lon=${longitude}`, {
    //             "method": "GET",
    //             "headers": {
    //               "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
    //               "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    //             }
    //           })
    //             setWeatherLoading(false);
    //     const data = await res.json()
  
    
    //     console.log(data)
    //     return data
    //   }

    //       const fetchWeather = async () => {
    //     const res = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`,{
    //         headers : { 
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //            }
    //     })
        
    //             setWeatherLoading(false);
    //     const data = await res.json()
  
    
    //     console.log(data)
    //     return data
    //   }

    //   useEffect(() => {
    //     // getLocation();

    //     const getWeather = async () => {
    //                 getLocation();
    //         const weatherFromApi = await fetchWeather()
    //         console.log(weatherFromApi)
    //         setWeatherData(weatherFromApi)
    //         // console.log("useeffect " + imageFromApi.photos.length)
    //       }
      
    //       getWeather()
    //       }, []);

    const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
    // console.log(apiKey)
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=1.3880331&lon=103.9018231&appid=${apiKey}`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    useEffect(() => {
        getLocation();
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
          .then((res) => res.json())
          .then((data) => setWeatherData(data));

      }, [apiUrl]);


      console.log(weatherData)

    return (
        <div className="weatherContainer">
            <p className="weatherText">{location}</p>
            {/* <button onClick={console.log(weatherData)}>Hello</button> */}
        </div>
    )
}

export default Weather
