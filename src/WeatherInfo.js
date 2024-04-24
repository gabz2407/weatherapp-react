import React from "react";
import FormatedDate from "./FormatedDate.js";
import WeatherUnit from "./WeatherUnit.js";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-info">
        <h1>{props.info.city}</h1>
        <p>
          <FormatedDate date={props.info.date} />
        </p>
      </div>
      <div className="row">
        <div className="col-6 weather-data">
          <ul>
            <li>
              <b>Humidity:</b> {props.info.humidity}%
            </li>
            <li>
              <b>Wind Speed:</b> {props.info.windSpeed}km/h
            </li>
          </ul>
        </div>
        <div className="col-6 row weather-display">
          <div className="col-6 mt-3">
            <img src={props.info.iconUrl} alt={props.info.description} />
          </div>
          <div className="col-6 p-0 mt-3">
            <WeatherUnit celsius={props.info.temperature} />
          </div>
        </div>

        <span className="text-capitalize description">
          {props.info.description}
        </span>
      </div>
    </div>
  );
}
