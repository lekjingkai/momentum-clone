import React from 'react'
import '../styles/Weather.css'
import { useState, useEffect } from "react";
import testimage from "./assets/01d.png";

const Weather = () => {
    const [location, setLocation] = useState('');
    // const [longitude, setLongitude] = useState('103.9018207');
    // const [latitude, setLatitude] = useState('1.3880139999999999');
    //     const [longitude, setLongitude] = useState('');
    // const [latitude, setLatitude] = useState('');
    // let longitude;
    // let latitude;

    const [weatherLoading, setWeatherLoading] = useState(true);
    const [weatherData, setWeatherData] = useState([]);
    const [getLatLon, setGetLatLon] = useState(false);
    const [weatherIcon, setWeatherIcon] = useState('');

    const whitee = require('../assets/01d.png').default

    // const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;



    // const getLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //       } else {
    //         setLocation("Geolocation is not supported by this browser.");
    //       }
    //   };

    //   const showPosition = (position) => {
    //     setLocation("Latitude: " + position.coords.latitude + " and Longitude: " + position.coords.longitude);
    //     setLongitude(position.coords.longitude)
    //     setLatitude(position.coords.latitude)
    //     setGetLatLon(true)
    //   };

    //   getLocation()

    // useEffect(() => {
    //     getLocation();
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
    //       .then((res) => res.json())
    //       .then((data) => setWeatherData(data));

    //   }, []);

//     const loadData = async () => {
//       // getLocation()
//       const response = await fetch(apiUrl)
//       const data = await response.json();
//       // setWeatherData(data)
//       // console.log(data)

// return data;
//     }

//         useEffect(() => {

//             const getWeather = async () => {
//               // getLocation()
//               const weatherFromApi = await loadData()
//               setWeatherData(weatherFromApi)
//             }
  
//             getWeather()

//       }, []);


//       // console.log(weatherData)
//       console.log(weatherData)


//     const loadData = async () => {
//       // getLocation()
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
//       const data = await response.json();
//       // setWeatherData(data)
//       // console.log(data)

// return data;
//     }

    const loadData2 = async () =>{
              if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {  
              let latitude = position.coords.latitude.toFixed(4); //save lat and lon from above API call
              let longitude = position.coords.longitude.toFixed(4);
        //               setLongitude(position.coords.longitude.toFixed(4))
        // setLatitude(position.coords.latitude.toFixed(4))

              console.log("Latitude: " + latitude + " Longitude: " + longitude); 

              const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`)
              const data = await response.json();

              console.log(data);
              setWeatherData(data)
              data && data.weather && setWeatherIcon(require(`../assets/${data.weather[0].icon}.png`).default);
              // return data;
            });
          } else {
            setLocation("Geolocation is not supported by this browser.");

          }
          // return null;
    }

        useEffect(() => {

            // const getWeather = async () => {
            //   // getLocation()
            //   const weatherFromApi = await loadData2()
            //   setWeatherData(weatherFromApi)
            //   console.log(weatherFromApi);

            // }
  
            // getWeather()
            // console.log(weatherData);
            loadData2()

      }, []);

      // weatherData && console.log(weatherData);
      const kelvinToFarenheit = (k) => {
        return (k - 273.15).toFixed(2);
      };


    return (
      <div className="weatherContainer">
        {weatherData && (
          <div className="weather-main">
          <div className="weather-header">
            {weatherData.weather && (
                        //   <img
                        //   src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                        //   alt="weather status icon"
                        //   className="weather-icon"
                        // />
                        <img
                        src={weatherIcon}
                        alt="weather status icon"
                        className="weather-icon"
                      />
            )}
            {weatherData.main && (
              <h2>{kelvinToFarenheit(weatherData.main.temp)}&deg; C</h2>
            )}


          </div>
          <p className="weatherText">{weatherData.name}</p>
          </div>
        )}
      </div>
    );
}

export default Weather
