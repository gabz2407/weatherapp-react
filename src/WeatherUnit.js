import React from "react";

import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  return (
    <div className="WeatherUnit text-end">
      <span className="temp text-light">{props.celsius}</span>
      <span className="unit ">˚C</span>
    </div>
  );
}
