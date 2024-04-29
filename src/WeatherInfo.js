import React from "react";
import FormatedDate from "./FormatedDate.js";
import WeatherUnit from "./WeatherUnit.js";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city-info">
        <h1 className="text-light">{props.info.city}</h1>
        <div className="date">
          <FormatedDate date={props.info.date} />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="weather-data">
          <ul>
            <li>
              <b className="text-light">Humidity:</b> {props.info.humidity}%
            </li>
            <li>
              <b className="text-light">Wind Speed:</b> {props.info.windSpeed}{" "}
              km/h
            </li>
          </ul>
        </div>
        <div className="d-flex justify-content-end weather-display">
          <div>
            <img src={props.info.iconUrl} alt={props.info.description} />
          </div>
          <div>
            <WeatherUnit celsius={props.info.temperature} />
          </div>
        </div>
      </div>
      <p className="text-capitalize text-end description">
        {props.info.description}
      </p>
    </div>
  );
}
