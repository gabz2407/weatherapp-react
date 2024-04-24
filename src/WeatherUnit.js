import React, { useState } from "react";

import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  return (
    <div className="WeatherUnit">
      <span className="temp text-end text-light">{props.celsius}</span>
      <span className="unit text-end">˚C</span>
    </div>
  );
}
