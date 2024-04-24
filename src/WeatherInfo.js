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
      <div className="row">
        <div className="col-7 weather-data">
          <ul>
            <li>
              <b className="text-light">Humidity:</b> {props.info.humidity}%
            </li>
            <li>
              <b className="text-light">Wind Speed:</b> {props.info.windSpeed}
              km/h
            </li>
          </ul>
        </div>
        <div className="col-5 row weather-display">
          <div className="col-9">
            <img
              className="float-end ps-5 pt-3"
              src={props.info.iconUrl}
              alt={props.info.description}
            />
          </div>
          <div className="col-3 text-end d-block pt-3">
            <WeatherUnit celsius={props.info.temperature} />
          </div>
        </div>

        <span className="text-capitalize text-end description">
          {props.info.description}
        </span>
      </div>
    </div>
  );
}
