import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
