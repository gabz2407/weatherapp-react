import React from "react";
import "./Conditions.css";

export default function Conditions(props) {
  let max = Math.round(props.response.temperature.maximum);
  let min = Math.round(props.response.temperature.minimum);

  function day() {
    let date = new Date(props.response.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="Conditions">
      <div className="row ps-1 forecast-heading">
        <div className="col-6 fw-semibold pb-1 text-light">{day()}</div>
        <div className="text-capitalize col-6 fw-medium text-end">
          {" "}
          {max}˚ | <span className="opacity-75">{min}˚ </span>{" "}
          <span className="text-light">
            {props.response.condition.description}
          </span>
        </div>
      </div>
      <div className="ps-1">
        <div>
          <span>Humidity:</span> {props.response.temperature.humidity}%
        </div>
        <div>
          <span>Wind Speed:</span> {props.response.wind.speed} km/h
        </div>
      </div>
    </div>
  );
}
