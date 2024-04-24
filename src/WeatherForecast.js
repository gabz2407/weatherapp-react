import React, { useState } from "react";
import ForecastDay from "./ForecastDay.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <div className="col">
          <ForecastDay forecast={forecast[0]} />
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
