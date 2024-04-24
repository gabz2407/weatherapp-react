import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = `8bc029ce07bb99a925obf42d966t543f`;
  //   let lat = props.coord.lat;
  //   let lon = props.coord.lon;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

  function handleResponse(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div>Wed</div>
      <img src={props.icon} alt={props.alt} />
      <div>
        <span> 19˚</span>
        <span className="forecast-min-temp">10˚</span>
      </div>
    </div>
  );
}
