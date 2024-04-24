import React from "react";
import "./Conditions.css";

export default function Conditions(props) {
  console.log(props);
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
      <div className="row ps-1">
        <div className="col-6 fw-semibold fs-6 pb-1">{day()}</div>
        <div className="text-capitalize col-6 fw-medium text-end fs-6">
          {" "}
          {max}˚ | <span className="opacity-75 ">{min}˚ </span>{" "}
          {props.response.condition.description}
        </div>
      </div>
      <div className="ps-1">
        <div>
          <span> Humidity:</span> {props.response.temperature.humidity}%
        </div>
        <div>
          <span>Wind Speed:</span> {props.response.wind.speed} km/h
        </div>
      </div>
    </div>
  );
}
