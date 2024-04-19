import React from "react";
import FormatedDate from "./FormatedDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormatedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">{props.info.temperature}˚C</div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind Speed: {props.info.windSpeed}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
