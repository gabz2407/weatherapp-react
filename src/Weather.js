import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    });

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Weather container">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary col-2"
            />
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>todays day and time</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">🌻 {weatherData.temperature}˚C</div>
          <div className="col-6">
            <ul>
              <li>Precipitation: %</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind speed: {weatherData.windSpeed}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "64469ac67e6dc941feb5b50915a18dc7";
    let city = "london";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Enter a city";
  }
}
