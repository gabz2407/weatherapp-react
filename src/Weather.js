import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast.js";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      loaded: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      coord: response.data.coord,

      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,

      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function inputCity(city) {
    setCity(city.target.value);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather container">
        <form onSubmit={handleSubmit}>
          <div className="row pe-4 ps-2">
            <div className="col-10 mt-4">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-input"
                autoFocus="on"
                onChange={inputCity}
              />
            </div>
            <input
              type="submit"
              value="Search"
              className="btn btn-light col-2 mt-4 search-button"
            />
          </div>
        </form>
        <WeatherInfo info={weatherData} />
        <WeatherForecast
          icon={weatherData.iconUrl}
          alt={weatherData.description}
          city={weatherData.city}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
