import React, { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay.js";
import Conditions from "./Conditions.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="grid">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div>
                  <div key={index}>
                    <ForecastDay forecast={dailyForecast} />
                  </div>{" "}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="forecast-weather-conditions mt-3">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div>
                  <Conditions response={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = `8bc029ce07bb99a925obf42d966t543f`;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
